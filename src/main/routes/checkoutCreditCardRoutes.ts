import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddCheckoutCreditCardController } from '../factories/controllers/checkout/addCheckoutWithCreditCard/addCheckoutCreditCardControllerFactory'

export default (router: Router): void => {
  router.post('/process_payment', adaptRoute(makeAddCheckoutCreditCardController()))
}
