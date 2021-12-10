import { ProductMongoRepository } from './productMongoRepository'
import { Collection } from 'mongodb'
import { mongoHelper } from '../helper/mongoHelper'

const makeSut = (): ProductMongoRepository => {
  return new ProductMongoRepository()
}

let productCollection: Collection

describe('Product Mongo Repository', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    productCollection = await mongoHelper.getCollection('products')
    await productCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should add a product on success', async () => {
      const sut = makeSut()
      await sut.add({
        name: 'any_name',
        description: 'any_description',
        category: 'any_category',
        price: 4,
        images: [{
          url: 'any_url'
        }],
        createdAt: new Date()
      })

      const product = await productCollection.find({ description: 'any_description' })
      expect(product).toBeTruthy()
    })
  })

  describe('loadById()', () => {
    test('Should load by id a product on success', async () => {
      const res = await productCollection.insertOne({
        name: 'any_name',
        description: 'any_description',
        category: 'any_category',
        price: 4,
        images: [{
          url: 'any_url'
        }],
        createdAt: new Date()
      })
      const id = res.ops[0]._id
      const sut = makeSut()
      const product = await sut.loadById(id)
      expect(product).toBeTruthy()
      console.log(product)
      expect(product.id).toBeTruthy()
    })
  })

  describe('loadAll()', () => {
    test('Shoul load all products', async () => {
      await productCollection.insertMany([{
        name: 'any_name',
        description: 'any_description',
        category: 'any_category',
        price: 4,
        images: [{
          url: 'any_url'
        }],
        createdAt: new Date()
      }, {
        name: 'any_name2',
        description: 'any_description2',
        category: 'any_category',
        price: 4,
        images: [{
          url: 'any_url2'
        }],
        createdAt: new Date()
      }])
      const sut = makeSut()
      const products = await sut.loadAll()
      expect(products.length).toBe(2)
      expect(products[0].id).toBeTruthy()
    })
  })

  describe('loadByCategory()', () => {
    test('Should load by category many products on success', async () => {
      await productCollection.insertMany([{
        name: 'any_name',
        description: 'any_description',
        category: 'any_category',
        price: 4,
        images: [{
          url: 'any_url'
        }],
        createdAt: new Date()
      }, {
        name: 'any_name2',
        description: 'any_description2',
        category: 'any_category2',
        price: 4,
        images: [{
          url: 'any_url2'
        }],
        createdAt: new Date()
      }])
      const sut = makeSut()
      const products = await sut.loadByCategory('any_category2')
      expect(products.length).toBe(1)
      expect(products[0].id).toBeTruthy()
      expect(products[0].name).toBe('any_name2')
    })

    test('Should load empty list', async () => {
      const sut = makeSut()
      const products = await sut.loadAll()
      expect(products.length).toBe(0)
    })
  })
})
