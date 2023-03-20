import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockAddCategoryParams } from '../../../../domain/test/mockCategory'
import { AddCategoryRepository } from '../../../protocols/db/category/addCategoryRepository'
import { mockAddCategoryRepository } from '../../../test/mockDbCategory'
import { DbAddCategory } from './dbAddCategory'

type SutTypes = {
  addCategoryRepositoryStub: AddCategoryRepository
  sut: DbAddCategory
}

const makeSut = ():SutTypes => {
  const addCategoryRepositoryStub = mockAddCategoryRepository()
  const sut = new DbAddCategory(addCategoryRepositoryStub)

  return {
    addCategoryRepositoryStub,
    sut
  }
}

describe('DbAddCategory', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  test('Shoul call AddCategoryRepostory with correct values', async () => {
    const { addCategoryRepositoryStub, sut } = makeSut()
    const addSpy = jest.spyOn(addCategoryRepositoryStub, 'add')
    await sut.add(mockAddCategoryParams())
    expect(addSpy).toHaveBeenCalledWith(mockAddCategoryParams())
  })

  test('Should throws if AddCategoryRepository throws', async () => {
    const { sut, addCategoryRepositoryStub } = makeSut()
    jest.spyOn(addCategoryRepositoryStub, 'add').mockImplementationOnce(throwError)

    const promise = sut.add(mockAddCategoryParams())
    // espera que o metodo encrypt lanse um erro
    await expect(promise).rejects.toThrow()
  })
})
