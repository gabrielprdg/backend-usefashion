import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockCategories } from '../../../../domain/test/mockCategory'
import { LoadCategories } from '../../../../domain/useCases/category/loadCategories'
import { LoadCategoriesRepository } from '../../../protocols/db/category/loadCategoriesRepository'
import { mockLoadCategoriesRepository } from '../../../test/mockDbCategory'
import { DbLoadCategories } from './dbLoadCategories'

type SutTypes = {
  loadCategoriesRepository: LoadCategoriesRepository
  sut: LoadCategories
}

const makeSut = (): SutTypes => {
  const loadCategoriesRepository = mockLoadCategoriesRepository()
  const sut = new DbLoadCategories(loadCategoriesRepository)
  return {
    loadCategoriesRepository,
    sut
  }
}

describe('LoadCategories', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  test('Should call LoadCategoriesRepository', async () => {
    const { sut, loadCategoriesRepository } = makeSut()
    const loadSpy = jest.spyOn(loadCategoriesRepository, 'loadAll')
    await sut.loadAll()
    expect(loadSpy).toHaveBeenCalled()
  })
  test('Should return a list of categories on success', async () => {
    const { sut } = makeSut()
    const categories = await sut.loadAll()
    expect(categories).toEqual(mockCategories())
  })
  test('Should throws if loadCategoriesRepository throws', async () => {
    const { sut, loadCategoriesRepository } = makeSut()
    jest.spyOn(loadCategoriesRepository, 'loadAll').mockImplementationOnce(throwError)
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow()
  })
})
