import { AddCheckoutCreditCardController } from '../../../../../presentation/controllers/checkout/addCheckoutWithCreditCard/addCheckoutWithCreditCard'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeAddCheckoutCreditCardValidation } from './addCheckoutCreditCardValidation'

export const makeAddCheckoutCreditCardController = (): Controller => {
  const controller = new AddCheckoutCreditCardController(makeAddCheckoutCreditCardValidation())
  return makeLogControllerDecorator(controller)
}