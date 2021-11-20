import { LoadProductByIdController } from '../../../../../presentation/controllers/product/loadProductById/loadProductById'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbLoadProductById } from '../../../useCases/product/loadProductById/loadProductByIdFactory'

export const makeLoadProductController = (): Controller => {
  const controller = new LoadProductByIdController(makeDbLoadProductById())
  return makeLogControllerDecorator(controller)
}
