import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddOrderController } from '../factories/controllers/order/addOrder/addOrderControllerFactory'
import { makeDeleteOrderByIdController } from '../factories/controllers/order/deleteOrderById/deleteOrderByIdControllerFactory'
import { makeLoadOrdersController } from '../factories/controllers/order/loadOrders/loadOrdersController'
import { makeLogControllerDecorator } from '../factories/decorators/logControllerDecoratorFactory'
import { adminAuth } from '../factories/middlewares/adminAuth'

export default (router: Router): void => {
  router.post('/order', adaptRoute(makeLogControllerDecorator(makeAddOrderController())))
  router.get('/order', adminAuth, adaptRoute(makeLogControllerDecorator(makeLoadOrdersController())))
  router.delete('/order', adminAuth, adaptRoute(makeLogControllerDecorator(makeDeleteOrderByIdController())))
}
