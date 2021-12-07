import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockCategories } from '../../../../domain/test/mockCategory'
import { LoadCategories } from '../../../../domain/useCases/category/loadCategories'
import { noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { mockLoadCategories } from '../../../test/mockCategory'
import { LoadCategoriesController } from './loginCategories'

type SutTypes = {
  loadCategoriesStub: LoadCategories
  sut: LoadCategoriesController
}

const makeSut = ():SutTypes => {
  const loadCategoriesStub = mockLoadCategories()
  const sut = new LoadCategoriesController(loadCategoriesStub)
  return {
    loadCategoriesStub,
    sut
  }
}

describe('LoadCategoriesController', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  test('Should call LoadCategories', async () => {
    const { sut, loadCategoriesStub } = makeSut()
    const loadSpy = jest.spyOn(loadCategoriesStub, 'loadAll')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })
  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const categories = await sut.handle({})
    expect(categories).toEqual(ok(mockCategories()))
  })
  test('Should return 204 if LoadCategories returns empty', async () => {
    const { sut, loadCategoriesStub } = makeSut()
    jest.spyOn(loadCategoriesStub, 'loadAll').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(noContent())
  })
  test('Should return 500 if LoadProducts throws', async () => {
    const { sut, loadCategoriesStub } = makeSut()
    jest.spyOn(loadCategoriesStub, 'loadAll').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
