import { AddOrderRepository } from "../../../../data/protocols/db/order/addOrderRepository";
import { AddOrderParams } from "../../../../domain/useCases/order/addOrder";
import { mongoHelper } from "../helper/mongoHelper";

export class OrderMongoRepository implements AddOrderRepository {
  async add(orderData: AddOrderParams): Promise<void> {
    const orderCollection = await mongoHelper.getCollection('orders')
    await orderCollection.insertOne(orderData)
  }  
}