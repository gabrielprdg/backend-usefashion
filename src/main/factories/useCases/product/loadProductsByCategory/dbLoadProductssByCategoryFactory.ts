import { DbLoadProductsByCategory } from '../../../../../data/useCases/product/loadProductByCategory/dbLoadProductByCategory'
import { LoadProductsByCategory } from '../../../../../domain/useCases/product/loadProductsByCategory'
import { ProductMongoRepository } from '../../../../../infra/db/mongoDb/product/productMongoRepository'

export const makeDbLoadProductsByCategory = (): LoadProductsByCategory => {
  const productMongoRepository = new ProductMongoRepository()
  return new DbLoadProductsByCategory(productMongoRepository)
}
