import { AddProductRepository } from '../../../../data/protocols/db/product/addProductRepository'
import mockdate from 'mockdate'
import { DbAddProduct } from './dbAddProduct'
import { mockAddProductRepository } from '../../../../data/test/mockDbProduct'
import { mockAddProductParams } from './../../../../domain/test/mockProduct'
import { throwError } from '../../../../domain/test'

type SutTypes = {
  sut: DbAddProduct
  addProductRepositoryStub: AddProductRepository
}

const makeSut = ():SutTypes => {
  const addProductRepositoryStub = mockAddProductRepository()
  const sut = new DbAddProduct(addProductRepositoryStub)

  return {
    sut,
    addProductRepositoryStub
  }
}

describe('DbAddProduct', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  test('Should call AddProductRepository with correct values', async () => {
    const { sut, addProductRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addProductRepositoryStub, 'add')
    await sut.add(mockAddProductParams())
    expect(addSpy).toHaveBeenCalledWith(mockAddProductParams())
  })

  test('Should throws if AddSurveyRepository throws', async () => {
    const { sut, addProductRepositoryStub } = makeSut()
    jest.spyOn(addProductRepositoryStub, 'add').mockImplementationOnce(throwError)

    const promise = sut.add(mockAddProductParams())
    // espera que o metodo encrypt lanse um erro
    await expect(promise).rejects.toThrow()
  })
})
