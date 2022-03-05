import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddCheckoutMercadoPagoController } from '../factories/controllers/checkout/addCheckoutWithMercadoPago/addCheckoutMercadoPagoControllerFactory'

export default (router: Router): void => {
  router.post('/process_payment_mp', adaptRoute(makeAddCheckoutMercadoPagoController()))
}
