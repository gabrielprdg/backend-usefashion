import { AddOrderController } from '../../../../../presentation/controllers/orders/addOrder/addOrderController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbAddOrder } from '../../../useCases/order/addOrder/dbAddOrderFactory'

export const makeAddOrderController = (): Controller => {
  const controller = new AddOrderController(makeDbAddOrder())
  return makeLogControllerDecorator(controller)
}
