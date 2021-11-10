import { AddProductParams } from '@/domain/useCases/product/addProduct'
import { AddProductRepository } from '../protocols/db/product/addProductRepository'

export const mockAddProductRepository = (): AddProductRepository => {
  class AddProductRepositoryStub implements AddProductRepository {
    async add (productData: AddProductParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddProductRepositoryStub()
}
