import { AddProduct, AddProductParams } from '../../domain/useCases/product/addProduct'

export const mockAddProduct = (): AddProduct => {
  class AddProductStub implements AddProduct {
    async add (product: AddProductParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddProductStub()
}
