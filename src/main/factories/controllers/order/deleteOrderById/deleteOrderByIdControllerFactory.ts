import { DeleteOrderByIdController } from '../../../../../presentation/controllers/orders/deleteOrderById/deleteOrderByIdController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbDeleteOrderById } from '../../../useCases/order/deleteOrderById/deleteOrderByIdFactory'

export const makeDeleteOrderByIdController = (): Controller => {
  const controller = new DeleteOrderByIdController(makeDbDeleteOrderById())
  return makeLogControllerDecorator(controller)
}
