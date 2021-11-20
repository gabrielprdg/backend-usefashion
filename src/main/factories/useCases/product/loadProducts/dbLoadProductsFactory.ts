import { DbLoadProducts } from '../../../../../data/useCases/product/loadProducts/loadProducts'
import { LoadProducts } from '../../../../../domain/useCases/product/loadProducts'
import { ProductMongoRepository } from '../../../../../infra/db/mongoDb/product/productMongoRepository'

export const makeDbLoadProducts = (): LoadProducts => {
  const productMongoRepository = new ProductMongoRepository()
  return new DbLoadProducts(productMongoRepository)
}
