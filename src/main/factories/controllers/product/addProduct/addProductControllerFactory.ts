import { AddProductController } from '../../../../../presentation/controllers/product/addProduct/addProductController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../../factories/decorators/logControllerDecoratorFactory'
import { makeDbAddProduct } from '../../../../factories/useCases/product/addProduct/dbAddProductFactory'
import { makeAddProductValidation } from './addProductValidationFactory'

export const makeAddProductController = (): Controller => {
  const controller = new AddProductController(makeDbAddProduct(), makeAddProductValidation())
  return makeLogControllerDecorator(controller)
}
