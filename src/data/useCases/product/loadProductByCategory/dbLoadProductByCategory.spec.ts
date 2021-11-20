import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockProducts } from '../../../../domain/test/mockProduct'
import { LoadProductsByCategoryRepository } from '../../../protocols/db/product/loadProductsByCategory'
import { mockLoadProductsByCategoryRepository } from '../../../test/mockDbProduct'
import { DbLoadProductsByCategory } from './dbLoadProductByCategory'

type SutTypes = {
  loadProductsByCategoryRepositoryStub: LoadProductsByCategoryRepository
  sut: DbLoadProductsByCategory
}

const makeSut = ():SutTypes => {
  const loadProductsByCategoryRepositoryStub = mockLoadProductsByCategoryRepository()
  const sut = new DbLoadProductsByCategory(loadProductsByCategoryRepositoryStub)

  return {
    loadProductsByCategoryRepositoryStub,
    sut
  }
}

describe('DbLoadProductsByCategory', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  test('Should call LoadProductByCategoryRepository', async () => {
    const { sut, loadProductsByCategoryRepositoryStub } = makeSut()
    const loadSpy = jest.spyOn(loadProductsByCategoryRepositoryStub, 'loadByCategory')
    await sut.loadByCategory('any_category')
    expect(loadSpy).toHaveBeenCalledWith('any_category')
  })

  test('Should return products on success ', async () => {
    const { sut } = makeSut()
    const survey = await sut.loadByCategory('any_category')
    expect(survey).toEqual(mockProducts())
  })

  test('Should throws if LoadProductsByCategoryRepository throws', async () => {
    const { sut, loadProductsByCategoryRepositoryStub } = makeSut()
    jest.spyOn(loadProductsByCategoryRepositoryStub, 'loadByCategory').mockImplementationOnce(throwError)

    const promise = sut.loadByCategory('any_category')
    // espera que o metodo lanse um erro
    await expect(promise).rejects.toThrow()
  })
})
