import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddCategoryController } from '../factories/controllers/category/addCategory/addCategoryControllerFactory'
import { adminAuth } from '../factories/middlewares/adminAuth'

export default (router: Router): void => {
  router.post('/categories', adminAuth, adaptRoute(makeAddCategoryController()))
}
