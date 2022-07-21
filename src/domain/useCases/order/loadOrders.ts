import { OrderModel } from "../../models/order";

export interface LoadOrders {
  loadAll:() => Promise<OrderModel[]>
}