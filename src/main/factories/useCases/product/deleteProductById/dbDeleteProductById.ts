import { DbDeleteProductById } from '../../../../../data/useCases/product/deleteProductById/dbDeleteProductById'
import { DeleteProductById } from '../../../../../domain/useCases/product/deleteProductById'
import { ProductMongoRepository } from '../../../../../infra/db/mongoDb/product/productMongoRepository'

export const makeDbDeleteProductById = (): DeleteProductById => {
  const productMongoRepository = new ProductMongoRepository()
  return new DbDeleteProductById(productMongoRepository)
}
