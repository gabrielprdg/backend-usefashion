import { DbLoadCategories } from '../../../../../data/useCases/category/loadCategories/dbLoadCategories'
import { LoadCategories } from '../../../../../domain/useCases/category/loadCategories'
import { CategoryMongoRepository } from '../../../../../infra/db/mongoDb/category/categoryMongoRepository'

export const makeDbLoadCategories = ():LoadCategories => {
  const categoryMongoRepository = new CategoryMongoRepository()
  return new DbLoadCategories(categoryMongoRepository)
}
