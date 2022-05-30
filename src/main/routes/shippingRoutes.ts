import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddShippingValuesController } from '../factories/controllers/shipping/addShippingValues/addShippingValuesControllerFactory'

export default (router: Router): void => {
  router.post('/shipping', adaptRoute(makeAddShippingValuesController()))
}
