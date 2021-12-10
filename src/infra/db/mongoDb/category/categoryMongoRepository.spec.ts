import { Collection } from 'mongodb'
import { mongoHelper } from '../helper/mongoHelper'
import { CategoryMongoRepository } from './categoryMongoRepository'

const makeSut = (): CategoryMongoRepository => {
  return new CategoryMongoRepository()
}

let categoryCollection: Collection

describe('Category Mongo Repository', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    categoryCollection = await mongoHelper.getCollection('categories')
    await categoryCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should add a category on success', async () => {
      const sut = makeSut()
      await sut.add({
        name: 'any_name',
        createdAt: new Date()
      })

      const category = await categoryCollection.find({ name: 'any_name' })
      expect(category).toBeTruthy()
    })
  })

  describe('loadAll()', () => {
    test('Should load all categories', async () => {
      await categoryCollection.insertMany([
        {
          name: 'any_name',
          createdAt: new Date()
        },
        {
          name: 'any_name2',
          createdAt: new Date()
        }
      ])
      const sut = makeSut()
      const categories = await sut.loadAll()
      expect(categories.length).toBe(2)
    })
  })
})
