import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockProductModel } from '../../../../domain/test/mockProduct'
import { LoadProductById } from '../../../../domain/useCases/product/loadProductById'
import { InvalidParamError } from '../../../errors'
import { forbidden, ok, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest } from '../../../protocols'
import { mockLoadProductById } from '../../../test/mockProduct'
import { LoadProductByIdController } from './loadProductById'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    productId: 'any_product_id'
  }
})

type SutTypes = {
  sut: LoadProductByIdController
  loadProductByIdStub : LoadProductById
}

const makeSut = ():SutTypes => {
  const loadProductByIdStub = mockLoadProductById()
  const sut = new LoadProductByIdController(loadProductByIdStub)

  return {
    sut,
    loadProductByIdStub
  }
}

describe('LoadProductById Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  test('Should calls LoadProductById with correct values', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadProductByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_product_id')
  })

  test('Should return 403 if LoadProductById returns null', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    jest.spyOn(loadProductByIdStub, 'loadById').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('productId')))
  })

  test('Should return 500 if LoadProductById throws', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    jest.spyOn(loadProductByIdStub, 'loadById').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(ok(mockProductModel()))
  })
})
