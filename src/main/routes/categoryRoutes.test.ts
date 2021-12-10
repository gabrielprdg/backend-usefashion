import request from 'supertest'
import app from '../config/app'
import { mongoHelper } from '../../infra/db/mongoDb/helper/mongoHelper'
import { Collection } from 'mongodb'
import { sign } from 'jsonwebtoken'
import env from '../config/env'

let categoryCollection: Collection
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

describe('category Routes', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    categoryCollection = await mongoHelper.getCollection('categories')
    await categoryCollection.deleteMany({})
    accountCollection = await mongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /categories', () => {
    test('Should return 403 on add category without accessToken', async () => {
      await request(app)
        .post('/api/categories')
        .send({
          name: 'any_name'
        })
        .expect(403)
    })

    test('Should return 204 on add category with valid accessToken', async () => {
      const accessToken = await makeAccessToken()

      await request(app)
        .post('/api/categories')
        .set('x-access-token', accessToken)
        .send({
          name: 'any_name'
        })
        .expect(204)
    })
  })

  describe('GET / categories', () => {
    test('Should return 200 on load categories ', async () => {
      await categoryCollection.insertMany([{
        name: 'any_nam',
        createdAt: new Date()
      }])

      await request(app)
        .get('/api/categories')
        .expect(200)
    })
  })
})
