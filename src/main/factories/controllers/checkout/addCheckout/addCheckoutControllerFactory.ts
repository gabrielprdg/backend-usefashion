import { AddCheckoutController } from '../../../../../presentation/controllers/checkout/addCheckout/addCheckout'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeAddCheckoutValidation } from './addCheckoutValidation'

export const makeAddCheckoutController = (): Controller => {
  const controller = new AddCheckoutController(makeAddCheckoutValidation())
  return makeLogControllerDecorator(controller)
}