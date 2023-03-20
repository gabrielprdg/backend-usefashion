import { OrderModel } from '../../domain/models/order'
import { mockOrders } from '../../domain/test/mockOrder'
import { AddOrder, AddOrderParams } from '../../domain/useCases/order/addOrder'
import { DeleteOrderById } from '../../domain/useCases/order/deleteOrderById'
import { LoadOrders } from '../../domain/useCases/order/loadOrders'

export const mockAddOrder = (): AddOrder => {
  class AddOrderStub implements AddOrder {
    async add (addOrderParams: AddOrderParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddOrderStub()
}

export const mockLoadOrders = (): LoadOrders => {
  class LoadOrdersStub implements LoadOrders {
    async loadAll (): Promise<OrderModel[]> {
      return Promise.resolve(mockOrders())
    }
  }

  return new LoadOrdersStub()
}

export const mockDeleteOrderById = (): DeleteOrderById => {
  class DeleteOrderByIdStub implements DeleteOrderById {
    async delete (): Promise<void> {
      return Promise.resolve()
    }
  }

  return new DeleteOrderByIdStub()
}
