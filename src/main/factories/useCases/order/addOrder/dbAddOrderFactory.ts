import { DbAddOrder } from "../../../../../data/useCases/order/addOrder/dbAddOrder";
import { AddOrder } from "../../../../../domain/useCases/order/addOrder";
import { OrderMongoRepository } from "../../../../../infra/db/mongoDb/order/orderMongoRepository";

export const makeDbAddOrder = (): AddOrder => {
  const orderMongoRepository = new OrderMongoRepository()
  return new DbAddOrder(orderMongoRepository)
}
