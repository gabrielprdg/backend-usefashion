import { ProductModel } from '../../domain/models/product'
import { mockProductModel } from '../../domain/test/mockProduct'
import { AddProduct, AddProductParams } from '../../domain/useCases/product/addProduct'
import { LoadProductById } from '../../domain/useCases/product/loadProducts'

export const mockAddProduct = (): AddProduct => {
  class AddProductStub implements AddProduct {
    async add (product: AddProductParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddProductStub()
}

export const mockLoadProductById = (): LoadProductById => {
  class LoadProductByIdStub implements LoadProductById {
    async loadById (id: string): Promise<ProductModel> {
      return Promise.resolve(mockProductModel())
    }
  }

  return new LoadProductByIdStub()
}
