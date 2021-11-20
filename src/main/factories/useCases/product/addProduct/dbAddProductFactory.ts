import { DbAddProduct } from '../../../../../data/useCases/product/addProduct/dbAddProduct'
import { AddProduct } from '../../../../../domain/useCases/product/addProduct'
import { ProductMongoRepository } from '../../../../../infra/db/mongoDb/product/productMongoRepository'

export const makeDbAddProduct = (): AddProduct => {
  const productMongoRepository = new ProductMongoRepository()
  return new DbAddProduct(productMongoRepository)
}
