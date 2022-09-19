import { DeleteCategoryByIdController } from '../../../../../presentation/controllers/category/deleteCategoryById/deleteCategoryByIdController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbDeleteCategoryById } from '../../../useCases/category/deleteCategoryById/dbDeleteCategoryById'

export const makeDeleteCategoryByIdController = (): Controller => {
  const controller = new DeleteCategoryByIdController(makeDbDeleteCategoryById())
  return makeLogControllerDecorator(controller)
}
