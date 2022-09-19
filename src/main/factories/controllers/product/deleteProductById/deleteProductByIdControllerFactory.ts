import { DeleteProductByIdController } from '../../../../../presentation/controllers/product/deleteProductById/deleteProductByIdController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../../factories/decorators/logControllerDecoratorFactory'
import { makeDbDeleteProductById } from '../../../useCases/product/deleteProductById/dbDeleteProductById'

export const makeDeleteProductByIdController = (): Controller => {
  const controller = new DeleteProductByIdController(makeDbDeleteProductById())
  return makeLogControllerDecorator(controller)
}
