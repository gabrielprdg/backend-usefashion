import request from 'supertest'
import app from '../config/app'
import { mongoHelper } from '../../infra/db/mongoDb/helper/mongoHelper'
import { Collection } from 'mongodb'
import { sign } from 'jsonwebtoken'
import env from '../config/env'

let productCollection: Collection
let accountCollection: Collection

const makeAccessToken = async (): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: 'gabrielprod',
    email: 'gabriel.pr@hotmail.com',
    password: '123',
    role: 'admin'
  })

  const id = res.ops[0]._id
  const accessToken = sign({ id }, env.jwtSecret)

  await accountCollection.updateOne({
    _id: id
  }, {
    $set: {
      accessToken
    }
  })

  return accessToken
}

describe('Product Routes', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    productCollection = await mongoHelper.getCollection('products')
    await productCollection.deleteMany({})
    accountCollection = await mongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /products', () => {
    test('Should return 403 on add product without accessToken', async () => {
      await request(app)
        .post('/api/products')
        .send({
          name: 'any_name',
          description: 'any_description',
          category: 'any_category',
          price: 4,
          images: [{
            name: 'any_name',
            size: 2,
            key: 'any_key',
            url: 'any_url'
          }]
        })
        .expect(403)
    })

    test('Should return 204 on add product with valid accessToken', async () => {
      const accessToken = await makeAccessToken()

      await request(app)
        .post('/api/products')
        .set('x-access-token', accessToken)
        .field('name', 'any_name')
        .field('category', 'any_category')
        .field('price', 4)
        .field('description', 'any_description')
        .field('productSize', 'M')
        .field('productSize', 'G')
        .expect(204)
    })
  })

  describe('GET /products', () => {
    test('Should return 200 on load products ', async () => {
      await productCollection.insertMany([{
        name: 'any_name',
        description: 'any_description',
        category: 'any_category',
        price: 4,
        images: [{
          name: 'any_name',
          size: 2,
          key: 'any_key',
          url: 'any_url'
        }],
        createdAt: new Date(),
        count: 1
      }])

      await request(app)
        .get('/api/products')
        .expect(200)
    })
  })

  describe('GET /product', () => {
    test('Should return 200 on load product by Id', async () => {
      const res = await productCollection.insertOne({
        name: 'any_name',
        description: 'any_description',
        category: 'any_category',
        productSize: ['M', 'G'],
        price: 4,
        images: [{
          nameFile: 'any_name',
          size: 'any_size',
          key: 'any_key',
          url: 'any_url'
        }],
        createdAt: new Date(),
        count: 1
      })

      await request(app)
        .get(`/api/product/${res.ops[0]._id as string}`)
        .expect(200)
    })
  })
})
