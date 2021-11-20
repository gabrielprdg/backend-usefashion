import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockProducts } from '../../../../domain/test/mockProduct'
import { LoadProductsByCategory } from '../../../../domain/useCases/product/loadProductsByCategory'
import { InvalidParamError } from '../../../errors'
import { forbidden, ok, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest } from '../../../protocols'
import { mockLoadProductsByCategory } from '../../../test/mockProduct'
import { LoadProductsByCategoryController } from './loadProductsByCategory'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    category: 'any_category'
  }
})

type SutTypes = {
  loadProductsByCategoryStub: LoadProductsByCategory
  sut: LoadProductsByCategoryController
}

const makeSut = ():SutTypes => {
  const loadProductsByCategoryStub = mockLoadProductsByCategory()
  const sut = new LoadProductsByCategoryController(loadProductsByCategoryStub)

  return {
    loadProductsByCategoryStub,
    sut
  }
}

describe('LoadProductByCategory', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  test('Shoul call LoadProductsByCategory with correct values', async () => {
    const { sut, loadProductsByCategoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadProductsByCategoryStub, 'loadByCategory')
    await sut.handle(makeFakeRequest())
    expect(loadSpy).toHaveBeenCalledWith('any_category')
  })

  test('Should return 403 if LoadProductsByCategory returns null', async () => {
    const { sut, loadProductsByCategoryStub } = makeSut()
    jest.spyOn(loadProductsByCategoryStub, 'loadByCategory').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('category')))
  })

  test('Should return 500 if LoadProductsByCategory throws', async () => {
    const { sut, loadProductsByCategoryStub } = makeSut()
    jest.spyOn(loadProductsByCategoryStub, 'loadByCategory').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(ok(mockProducts()))
  })
})
