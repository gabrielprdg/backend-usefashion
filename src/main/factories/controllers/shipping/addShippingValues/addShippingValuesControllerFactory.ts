import { AddShippingValuesController } from '../../../../../presentation/controllers/shipping/addShippingValues/addShippingValuesController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'

export const makeAddShippingValuesController = (): Controller => {
  const controller = new AddShippingValuesController()
  return makeLogControllerDecorator(controller)
}
