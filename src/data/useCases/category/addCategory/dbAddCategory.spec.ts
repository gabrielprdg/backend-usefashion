import mockdate from 'mockdate'
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
  test('Shoul call AddCategoryRepostory with correct values', () => {
    const { addCategoryRepositoryStub, sut } = makeSut()
    jest.spyOn(addCategoryRepositoryStub, 'add')
  })
})
