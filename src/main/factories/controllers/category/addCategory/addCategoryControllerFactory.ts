import { AddCategoryController } from '../../../../../presentation/controllers/category/addCategory/addCategoryController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbAddCategory } from '../../../useCases/category/addCategory/dbAddCategoryFactory'
import { makeAddCategoryValidation } from './addCategoryValidationFactory'

export const makeAddCategoryController = (): Controller => {
  const controller = new AddCategoryController(makeDbAddCategory(), makeAddCategoryValidation())
  return makeLogControllerDecorator(controller)
}
