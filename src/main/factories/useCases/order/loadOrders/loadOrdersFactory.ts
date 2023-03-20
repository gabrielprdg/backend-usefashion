import { DbLoadOrders } from '../../../../../data/useCases/order/loadOrders/dbLoadOrders'
import { LoadOrders } from '../../../../../domain/useCases/order/loadOrders'
import { OrderMongoRepository } from '../../../../../infra/db/mongoDb/order/orderMongoRepository'

export const makeDbLoadOrders = ():LoadOrders => {
  const orderMongoRepository = new OrderMongoRepository()
  return new DbLoadOrders(orderMongoRepository)
}
