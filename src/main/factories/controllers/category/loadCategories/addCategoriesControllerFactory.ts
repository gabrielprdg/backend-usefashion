import { LoadCategoriesController } from '../../../../../presentation/controllers/category/loadCategories/loginCategories'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { makeDbLoadCategories } from '../../../useCases/category/loadCategories/dbLoadCategoriesFactory'

export const makeLoadCategoriesController = (): Controller => {
  const controller = new LoadCategoriesController(makeDbLoadCategories())
  return makeLogControllerDecorator(controller)
}
