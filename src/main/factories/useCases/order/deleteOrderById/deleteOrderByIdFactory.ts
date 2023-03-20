import { DbDeleteOrderById } from '../../../../../data/useCases/order/deleteOrderById/dbDeleteOrderById'
import { DeleteOrderById } from '../../../../../domain/useCases/order/deleteOrderById'
import { OrderMongoRepository } from '../../../../../infra/db/mongoDb/order/orderMongoRepository'

export const makeDbDeleteOrderById = ():DeleteOrderById => {
  const orderMongoRepository = new OrderMongoRepository()
  return new DbDeleteOrderById(orderMongoRepository)
}
