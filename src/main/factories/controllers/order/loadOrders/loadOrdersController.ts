import { LoadOrdersController } from '../../../../../presentation/controllers/orders/loadOrders/loadOrdersController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbLoadOrders } from '../../../useCases/order/loadOrders/loadOrdersFactory'

export const makeLoadOrdersController = (): Controller => {
  const controller = new LoadOrdersController(makeDbLoadOrders())
  return makeLogControllerDecorator(controller)
}
