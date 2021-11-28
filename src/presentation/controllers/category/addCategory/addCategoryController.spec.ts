import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { AddCategory } from '../../../../domain/useCases/category/addCategory'
import { badRequest, noContent, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest, Validation } from '../../../protocols'
import { mockValidation } from '../../../test'
import { mockAddCategory } from '../../../test/mockCategory'
import { AddCategoryController } from './addCategoryController'

const makeHttpRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    createdAt: new Date()
  }
})

type SutTypes = {
  addCategoryStub: AddCategory
  validationStub: Validation
  sut: AddCategoryController
}

const makeSut = (): SutTypes => {
  const addCategoryStub = mockAddCategory()
  const validationStub = mockValidation()
  const sut = new AddCategoryController(addCategoryStub, validationStub)

  return {
    addCategoryStub,
    validationStub,
    sut
  }
}

describe('AddCategory Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  test('Should return 400 if Validation fails', async () => {
    const { validationStub, sut } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call Validation with correct values', async () => {
    const { validationStub, sut } = makeSut()
    const addSpy = jest.spyOn(validationStub, 'validate')
    await sut.handle(makeHttpRequest())
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      createdAt: new Date()
    })
  })

  test('Should return 500 if AddCategory throws', async () => {
    const { addCategoryStub, sut } = makeSut()
    jest.spyOn(addCategoryStub, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
