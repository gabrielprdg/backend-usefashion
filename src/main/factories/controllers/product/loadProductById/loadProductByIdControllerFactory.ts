import { LoadProductByIdController } from '../../../../../presentation/controllers/product/loadProductById/loadProductById'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbLoadProductById } from '../../../useCases/product/loadProductById/dbLoadProductByIdFactory'

export const makeLoadProductByIdController = (): Controller => {
  const controller = new LoadProductByIdController(makeDbLoadProductById())
  return makeLogControllerDecorator(controller)
}
