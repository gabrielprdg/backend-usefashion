import { AddOrderRepository } from '../../../../data/protocols/db/order/addOrderRepository'
import { DeleteOrderByIdRepository } from '../../../../data/protocols/db/order/deleteOrderRepository'
import { LoadOrdersRepository } from '../../../../data/protocols/db/order/loadOrdersRepository'
import { OrderModel } from '../../../../domain/models/order'
import { AddOrderParams } from '../../../../domain/useCases/order/addOrder'
import { mongoHelper } from '../helper/mongoHelper'
import { ObjectId } from 'mongodb'

export class OrderMongoRepository implements AddOrderRepository, LoadOrdersRepository, DeleteOrderByIdRepository {
  async add (orderData: AddOrderParams): Promise<void> {
    const orderCollection = await mongoHelper.getCollection('orders')
    await orderCollection.insertOne(orderData)
  }

  async loadAll (): Promise<OrderModel[]> {
    const orderCollection = await mongoHelper.getCollection('orders')
    const orders = await orderCollection.find().toArray()
    return mongoHelper.mapCollection(orders) // helper que mapea os objetos facilitando a leitura de dados
  }

  async delete (id: string): Promise<void> {
    const orderCollection = await mongoHelper.getCollection('orders')
    await orderCollection.deleteOne({ _id: new ObjectId(id) })
  }
}
