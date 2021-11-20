import { DbLoadProductById } from '../../../../../data/useCases/product/loadProductById/dbLoadProductById'
import { LoadProductById } from '../../../../../domain/useCases/product/loadProductById'
import { ProductMongoRepository } from '../../../../../infra/db/mongoDb/product/productMongoRepository'

export const makeDbLoadProductById = (): LoadProductById => {
  const productMongoRepository = new ProductMongoRepository()
  return new DbLoadProductById(productMongoRepository)
}
