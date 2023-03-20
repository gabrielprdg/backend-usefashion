import request from 'supertest'
import app from '../config/app'
import { mongoHelper } from '../../infra/db/mongoDb/helper/mongoHelper'
import { Collection } from 'mongodb'
import { sign } from 'jsonwebtoken'
import env from '../config/env'

let orderCollection: Collection
let accountCollection: Collection

const makeAccessToken = async (): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: 'gabrielprod',
    email: 'gabriel.pr33@hotmail.com',
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

describe('Order Routes', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    orderCollection = await mongoHelper.getCollection('orders')
    await orderCollection.deleteMany({})
    accountCollection = await mongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /orders', () => {
    test('Should return 204 on add order with success', async () => {
      const accessToken = await makeAccessToken()

      await request(app)
        .post('/api/order')
        .set('x-access-token', accessToken)
        .send({
          name: 'any_name'
        })
        .expect(204)
    })
  })

  describe('GET / orders', () => {
    test('Should return 204 on load orders', async () => {
      const accessToken = await makeAccessToken()
      await orderCollection.insertMany([{
        user: {
          id: 'any_user_id',
          firstName: 'any_name',
          surname: 'any_surname',
          address: {
            streetName: 'any_street_name',
            streetNumber: 'any_number',
            state: 'any_state',
            cep: 'any_cep',
            complement: 'any_complement',
            district: 'any_district'
          },
          doc: 'any_document',
          email: 'any_email',
          telephone: 'any_telephone'
        },
        product: {
          id: 'any_product_id',
          name: 'any_product_name',
          description: 'any_description',
          count: 3,
          price: 23.3,
          shippingType: 'any_shipping',
          productSize: 'any_size',
          colors: 'any_color'
        },
        created_at: new Date()
      }, {
        user: {
          id: 'any_user_id_2',
          firstName: 'any_name_2',
          surname: 'any_surname_2',
          address: {
            streetName: 'any_street_name_2',
            streetNumber: 'any_number_2',
            state: 'any_state_2',
            cep: 'any_cep_2',
            complement: 'any_complement_2',
            district: 'any_district_2'
          },
          doc: 'any_document_2',
          email: 'any_email_2',
          telephone: 'any_telephone_2'
        },
        product: {
          id: 'any_product_id_2',
          name: 'any_product_name_2',
          description: 'any_description_2',
          count: 3,
          price: 23.3,
          shippingType: 'any_shipping_2',
          productSize: 'any_size_2',
          colors: 'any_color_2'
        },
        created_at: new Date()
      }])

      await request(app)
        .get('/api/order')
        .set('x-access-token', accessToken)
        .expect(200)
    })
  })

  describe('DELETE / orders', () => {
    test('Should return 204 on load orders ', async () => {
      const accessToken = await makeAccessToken()
      await orderCollection.insertMany([{
        user: {
          id: 'any_user_id',
          firstName: 'any_name',
          surname: 'any_surname',
          address: {
            streetName: 'any_street_name',
            streetNumber: 'any_number',
            state: 'any_state',
            cep: 'any_cep',
            complement: 'any_complement',
            district: 'any_district'
          },
          doc: 'any_document',
          email: 'any_email',
          telephone: 'any_telephone'
        },
        product: {
          id: 'any_product_id',
          name: 'any_product_name',
          description: 'any_description',
          count: 3,
          price: 23.3,
          shippingType: 'any_shipping',
          productSize: 'any_size',
          colors: 'any_color'
        },
        created_at: new Date()
      }])

      await request(app)
        .delete('/api/order')
        .set('x-access-token', accessToken)
        .expect(204)
    })
  })
})
