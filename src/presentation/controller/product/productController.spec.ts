import { AddProduct } from '../../../domain/useCases/product/addProduct'
import { HttpRequest, Validation } from '../../../presentation/protocols'
import { mockValidation } from '../../../presentation/test'
import { mockAddProduct } from '../../../presentation/test/mockProduct'
import { ProductController } from './productController'

type SutTypes = {
  addProductStub : AddProduct
  validationStub : Validation
  sut: ProductController
}

const makeSut = ():SutTypes => {
  const addProductStub = mockAddProduct()
  const validationStub = mockValidation()
  const sut = new ProductController(addProductStub, validationStub)

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
    price: 0,
    images: [{
      url: 'any_url'
    }],
    createdAt: new Date()
  }
})

describe('productController ', () => {
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
    await sut.handle(makeHttpRequest())
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description',
      price: 0,
      images: [{
        url: 'any_url'
      }],
      createdAt: new Date()
    })
  })
})
