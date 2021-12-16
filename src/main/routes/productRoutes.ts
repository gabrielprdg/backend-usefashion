import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeAddProductController } from '../factories/controllers/product/addProduct/addProductControllerFactory'
import { makeLoadProductByIdController } from '../factories/controllers/product/loadProductById/loadProductByIdControllerFactory'
import { makeLoadProductsController } from '../factories/controllers/product/loadProducts/loadProductsControllerFactory'
import { makeLoadProductsByCategoryController } from '../factories/controllers/product/loadProductsByCategory/loadProductsByCategoryControllerFactory'
import { adminAuth } from '../factories/middlewares/adminAuth'
import multer from 'multer'
import multerConfig from '../config/multer'

export default (router: Router): void => {
  router.post('/products', adminAuth, multer(multerConfig).array('file', 5), adaptRoute(makeAddProductController()))
  router.get('/products', adaptRoute(makeLoadProductsController()))
  router.get('/product/:id', adaptRoute(makeLoadProductByIdController()))
  router.get('/products/:category', adaptRoute(makeLoadProductsByCategoryController()))
}
