import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddCheckoutTicketController } from '../factories/controllers/checkout/addCheckoutWithTicket/addCheckoutTicketControllerFactory'


export default (router: Router): void => {
  router.post('/process_payment_ticket', adaptRoute(makeAddCheckoutTicketController()))
}
