import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { DeleteCategoryById } from '../../../../domain/useCases/category/deleteCategoryById'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest } from '../../../protocols'
import { mockDeleteCategoryById } from '../../../test/mockCategory'
import { DeleteCategoryByIdController } from './deleteCategoryByIdController'

const makeFakeRequest = (): HttpRequest => ({
  params: 'any_id'
})

type SutTypes = {
  deleteCategoryByIdStub: DeleteCategoryById
  sut: DeleteCategoryByIdController
}

const makeSut = (): SutTypes => {
  const deleteCategoryByIdStub = mockDeleteCategoryById()
  const sut = new DeleteCategoryByIdController(deleteCategoryByIdStub)

  return {
    deleteCategoryByIdStub,
    sut
  }
}

describe('DeleteCategoryById Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  it('Should call DeleteCategoryById with correct values', async () => {
    const { sut, deleteCategoryByIdStub } = makeSut()
    const deleteSpy = jest.spyOn(deleteCategoryByIdStub, 'delete')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(deleteSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  it('Should return 500 if DeleteCategoryById throws', async () => {
    const { sut, deleteCategoryByIdStub } = makeSut()
    jest.spyOn(deleteCategoryByIdStub, 'delete').mockImplementationOnce(throwError)
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
