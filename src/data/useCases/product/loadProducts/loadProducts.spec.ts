import { throwError } from '../../../../domain/test'
import { mockProducts } from '../../../../domain/test/mockProduct'
import { LoadProductsRepository } from '../../../protocols/db/product/loadProductsRepository'
import { mockLoadProductsRepository } from '../../../test/mockDbProduct'
import { DbLoadProducts } from './loadProducts'

type SutTypes = {
  loadProductsRepositoryStub: LoadProductsRepository
  sut: DbLoadProducts
}

const makeSut = (): SutTypes => {
  const loadProductsRepositoryStub = mockLoadProductsRepository()
  const sut = new DbLoadProducts(loadProductsRepositoryStub)

  return {
    loadProductsRepositoryStub,
    sut
  }
}

describe('DbLoadProducts', () => {
  test('Should call LoadSurveysRepository', async () => {
    const { sut, loadProductsRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadProductsRepositoryStub, 'loadAll')
    await sut.loadAll()
    expect(loadSpy).toHaveBeenCalled()
  })

  test('Should return a list of Products on success ', async () => {
    const { sut } = makeSut()
    const surveys = await sut.loadAll()
    expect(surveys).toEqual(mockProducts())
  })

  test('Should throws if LoadSurveysRepository throws', async () => {
    const { sut, loadProductsRepositoryStub } = makeSut()
    jest.spyOn(loadProductsRepositoryStub, 'loadAll').mockImplementationOnce(throwError)

    const promise = sut.loadAll()
    // espera que o metodo lanse um erro
    await expect(promise).rejects.toThrow()
  })
})
