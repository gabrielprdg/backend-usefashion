import { DbAddCategory } from '../../../../../data/useCases/category/addCategory/dbAddCategory'
import { AddCategory } from '../../../../../domain/useCases/category/addCategory'
import { CategoryMongoRepository } from '../../../../../infra/db/mongoDb/category/categoryMongoRepository'

export const makeDbAddCategory = (): AddCategory => {
  const categoryMongoRepository = new CategoryMongoRepository()
  return new DbAddCategory(categoryMongoRepository)
}
