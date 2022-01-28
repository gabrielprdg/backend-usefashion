import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddCategoryController } from '../factories/controllers/category/addCategory/addCategoryControllerFactory'
import { makeLoadCategoriesController } from '../factories/controllers/category/loadCategories/addCategoriesControllerFactory'
import { adminAuth } from '../factories/middlewares/adminAuth'

export default (router: Router): void => {
  router.get('/process_payment', adaptRoute(makeLoadCategoriesController()))
}
