import { AddOrderRepository } from '../../../../data/protocols/db/order/addOrderRepository'
import { LoadOrdersRepository } from '../../../../data/protocols/db/order/loadOrdersRepository'
import { OrderModel } from '../../../../domain/models/order'
import { AddOrderParams } from '../../../../domain/useCases/order/addOrder'
import { mongoHelper } from '../helper/mongoHelper'

export class OrderMongoRepository implements AddOrderRepository, LoadOrdersRepository {
  async add (orderData: AddOrderParams): Promise<void> {
    const orderCollection = await mongoHelper.getCollection('orders')
    await orderCollection.insertOne(orderData)
  }

  async loadAll (): Promise<OrderModel[]> {
    const orderCollection = await mongoHelper.getCollection('orders')
    const orders = await orderCollection.find().toArray()
    return mongoHelper.mapCollection(orders) // helper que mapea os objetos facilitando a leitura de dados
  }
}
