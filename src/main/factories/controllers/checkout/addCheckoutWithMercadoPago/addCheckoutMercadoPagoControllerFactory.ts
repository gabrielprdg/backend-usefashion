import { AddCheckoutMercadoPagoController } from '../../../../../presentation/controllers/checkout/addCheckoutWithMercadoPago/addCheckoutWithMercadoPago'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeAddCheckoutMercadoPagoValidation } from './addCheckoutMercadoPagoValidation'

export const makeAddCheckoutMercadoPagoController = (): Controller => {
  const controller = new AddCheckoutMercadoPagoController(makeAddCheckoutMercadoPagoValidation())
  return makeLogControllerDecorator(controller)
}