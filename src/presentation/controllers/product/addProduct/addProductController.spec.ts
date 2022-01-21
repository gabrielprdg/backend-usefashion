import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { AddProduct } from '../../../../domain/useCases/product/addProduct'
import { badRequest, noContent, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest, Validation } from '../../../protocols'
import { mockValidation } from '../../../test'
import { mockAddProduct } from '../../../test/mockProduct'
import { AddProductController } from './addProductController'
import AWSMock from 'aws-sdk-mock'

type SutTypes = {
  addProductStub : AddProduct
  validationStub : Validation
  sut: AddProductController
}

const makeSut = ():SutTypes => {
  const addProductStub = mockAddProduct()
  const validationStub = mockValidation()
  const sut = new AddProductController(addProductStub, validationStub)

  return {
    addProductStub,
    validationStub,
    sut
  }
}

const makeHttpRequest = ():HttpRequest => ({
  body: {
    name: 'any_name',
    description: 'any_description',
    category: 'any_category',
    price: 0,
  },
  files: [{
    originalname: "any_name",
    size: 3,
    key : "any_key",
    location : "any_url"
  }]
})

const makeFakeRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    description: 'any_description',
    category: 'any_category',
    price: 0,
    createdAt: new Date(),
    count: 1,
    images: [{
      name: 'any_name',
      size: 3,
      key: 'any_key',
      url: 'any_url'
    }]
  }
})

describe('AddProduct Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  test('Should return 400 with if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeHttpRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should call AddProduct with correct values', async () => {
    const { sut, addProductStub } = makeSut()
    const addSpy = jest.spyOn(addProductStub, 'add')
    const httpRequest = makeHttpRequest()
    await sut.handle(httpRequest)
    const readyRequest = makeFakeRequest()
    expect(addSpy).toHaveBeenCalledWith(readyRequest.body)
  })

  test('Should return 500 if AddProduct throws', async () => {
    const { sut, addProductStub } = makeSut()
    jest.spyOn(addProductStub, 'add').mockImplementationOnce(throwError)
    const httpRequest = makeHttpRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeHttpRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
