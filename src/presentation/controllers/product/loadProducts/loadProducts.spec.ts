import { LoadProducts } from '../../../../domain/useCases/product/loadProducts'
import { mockLoadProducts } from '../../../test/mockProduct'
import { LoadProductsController } from './loadProducts'
import mockdate from 'mockdate'
import { mockProducts } from '../../../../domain/test/mockProduct'
import { noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { throwError } from '../../../../domain/test'

type SutTypes = {
  loadProductsStub: LoadProducts
  sut: LoadProductsController
}

const makeSut = ():SutTypes => {
  const loadProductsStub = mockLoadProducts()
  const sut = new LoadProductsController(loadProductsStub)

  return {
    loadProductsStub,
    sut
  }
}

describe('LoadProducts Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  test('Should call LoadProducts', async () => {
    const { sut, loadProductsStub } = makeSut()
    const loadSpy = jest.spyOn(loadProductsStub, 'loadAll')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })
  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(ok(mockProducts()))
  })
  test('Should return 204 if LoadProducts returns empty', async () => {
    const { sut, loadProductsStub } = makeSut()
    jest.spyOn(loadProductsStub, 'loadAll').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if LoadProducts throws', async () => {
    const { sut, loadProductsStub } = makeSut()
    jest.spyOn(loadProductsStub, 'loadAll').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
