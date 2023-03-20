import { Collection } from 'mongodb'
import { mockAddOrderParams } from '../../../../domain/test/mockOrder'
import { mongoHelper } from '../helper/mongoHelper'
import { OrderMongoRepository } from './orderMongoRepository'

const makeSut = (): OrderMongoRepository => {
  return new OrderMongoRepository()
}

let orderCollection: Collection

describe('Order Mongo Repository', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await mongoHelper.disconnect()
  })

  beforeEach(async () => {
    orderCollection = await mongoHelper.getCollection('orders')
    await orderCollection.deleteMany({})
  })

  describe('add()', () => {
    test('Should add an order on success', async () => {
      const sut = makeSut()
      await sut.add({
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
      })
      const order = await orderCollection.findOne({ 'user.id': { $eq: 'any_user_id' } })
      expect(order).toBeTruthy()
    })
  })

  describe('loadOrders()', () => {
    test('Should load all orders on success ', async () => {
      await orderCollection.insertMany([{
        id: 'any_id',
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
        id: 'any_id_2',
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
      const sut = makeSut()
      const orders = await sut.loadAll()
      expect(orders.length).toBe(2)
      expect(orders[0].id).toBeTruthy()
      expect(orders[0].user.firstName).toBe('any_name')
      expect(orders[1].user.firstName).toBe('any_name_2')
    })
  })

  describe('DeleteOrderById', () => {
    test('Should delete an order ', async () => {
      const sut = makeSut()
      const result = await orderCollection.insertOne(mockAddOrderParams())
      const fakeOrder = result.ops[0]

      await sut.delete(fakeOrder._id)
      const order = await orderCollection.findOne({ _id: fakeOrder._id })
      expect(order).toBeFalsy()
    })
  })
})
