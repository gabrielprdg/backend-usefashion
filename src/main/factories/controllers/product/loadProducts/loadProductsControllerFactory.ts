import { LoadProductsController } from '../../../../../presentation/controllers/product/loadProducts/loadProducts'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbLoadProducts } from '../../../useCases/product/loadProducts/dbLoadProductsFactory'

export const makeLoadProductsController = (): Controller => {
  const controller = new LoadProductsController(makeDbLoadProducts())
  return makeLogControllerDecorator(controller)
}
