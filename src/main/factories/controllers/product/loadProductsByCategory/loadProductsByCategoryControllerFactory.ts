import { LoadProductsByCategoryController } from '../../../../../presentation/controllers/product/loadProductsByCategory/loadProductsByCategory'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbLoadProductsByCategory } from '../../../useCases/product/loadProductsByCategory/dbLoadProductssByCategoryFactory'

export const makeLoadProductsByCategoryController = (): Controller => {
  const controller = new LoadProductsByCategoryController(makeDbLoadProductsByCategory())
  return makeLogControllerDecorator(controller)
}
