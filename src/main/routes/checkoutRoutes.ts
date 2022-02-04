import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeLoadCategoriesController } from '../factories/controllers/category/loadCategories/addCategoriesControllerFactory'
import { makeAddCheckoutController } from '../factories/controllers/checkout/addCheckout/addCheckoutControllerFactory'

export default (router: Router): void => {
  router.post('/process_payment', adaptRoute(makeAddCheckoutController()))
}
