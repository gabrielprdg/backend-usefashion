import { DbDeleteCategoryById } from '../../../../../data/useCases/category/deleteCategory/dbDeleteCategoryById'
import { DeleteCategoryById } from '../../../../../domain/useCases/category/deleteCategoryById'
import { CategoryMongoRepository } from '../../../../../infra/db/mongoDb/category/categoryMongoRepository'

export const makeDbDeleteCategoryById = (): DeleteCategoryById => {
  const categoryMongoRepository = new CategoryMongoRepository()
  return new DbDeleteCategoryById(categoryMongoRepository)
}
