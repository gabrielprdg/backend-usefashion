import { AddCheckoutTicketController } from '../../../../../presentation/controllers/checkout/addCheckoutWithTicket/addCheckoutWIthTicket'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeAddCheckoutTicketValidation } from './addCheckoutTicketValidation'

export const makeAddCheckoutTicketController = (): Controller => {
  const controller = new AddCheckoutTicketController(makeAddCheckoutTicketValidation())
  return makeLogControllerDecorator(controller)
}