import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddCheckoutCreditCardController } from '../factories/controllers/checkout/addCheckoutWithCreditCard/addCheckoutCreditCardControllerFactory'
import { makeAddCheckoutMercadoPagoController } from '../factories/controllers/checkout/addCheckoutWithMercadoPago/addCheckoutMercadoPagoControllerFactory'
import { makeAddCheckoutTicketController } from '../factories/controllers/checkout/addCheckoutWithTicket/addCheckoutTicketControllerFactory'

export default (router: Router): void => {
  router.post('/process_payment', adaptRoute(makeAddCheckoutCreditCardController()))
  router.post('/process_payment_ticket', adaptRoute(makeAddCheckoutTicketController()))
  router.post('/process_payment_mp', adaptRoute(makeAddCheckoutMercadoPagoController()))
}
