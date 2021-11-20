import { ProductModel } from '../../domain/models/product'
import { mockProductModel, mockProducts } from '../../domain/test/mockProduct'
import { AddProduct, AddProductParams } from '../../domain/useCases/product/addProduct'
import { LoadProductById } from '../../domain/useCases/product/loadProductById'
import { LoadProducts } from '../../domain/useCases/product/loadProducts'
import { LoadProductsByCategory } from '../../domain/useCases/product/loadProductsByCategory'

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

export const mockLoadProducts = (): LoadProducts => {
  class LoadProductsStub implements LoadProducts {
    async loadAll (): Promise<ProductModel[]> {
      return Promise.resolve(mockProducts())
    }
  }

  return new LoadProductsStub()
}

export const mockLoadProductsByCategory = (): LoadProductsByCategory => {
  class LoadProductsByCategory implements LoadProductsByCategory {
    async loadByCategory (category: string): Promise<ProductModel[]> {
      return Promise.resolve(mockProducts())
    }
  }

  return new LoadProductsByCategory()
}
