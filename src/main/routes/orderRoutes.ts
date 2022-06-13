import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddOrderController } from '../factories/controllers/order/addOrder/addOrderControllerFactory'
import { makeLogControllerDecorator } from '../factories/decorators/logControllerDecoratorFactory'

export default (router: Router): void => {
  router.post('/order', adaptRoute(makeLogControllerDecorator(makeAddOrderController())))
}
