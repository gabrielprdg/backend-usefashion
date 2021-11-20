import { ProductModel } from '../../domain/models/product'
import { mockProductModel, mockProducts } from '../../domain/test/mockProduct'
import { AddProductParams } from '../../domain/useCases/product/addProduct'
import { AddProductRepository } from '../protocols/db/product/addProductRepository'
import { LoadProductByIdRepository } from '../protocols/db/product/loadProductByIdRepository'
import { LoadProductsByCategoryRepository } from '../protocols/db/product/loadProductsByCategory'
import { LoadProductsRepository } from '../protocols/db/product/loadProductsRepository'

export const mockAddProductRepository = (): AddProductRepository => {
  class AddProductRepositoryStub implements AddProductRepository {
    async add (productData: AddProductParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddProductRepositoryStub()
}

export const mockLoadProductByIdRepository = ():LoadProductByIdRepository => {
  class LoadProductByIdRepositoryStub implements LoadProductByIdRepository {
    async loadById (id: string): Promise<ProductModel> {
      return Promise.resolve(mockProductModel())
    }
  }

  return new LoadProductByIdRepositoryStub()
}

export const mockLoadProductsRepository = (): LoadProductsRepository => {
  class LoadProductsRepositoryStub implements LoadProductsRepository {
    async loadAll (): Promise<ProductModel[]> {
      return Promise.resolve(mockProducts())
    }
  }

  return new LoadProductsRepositoryStub()
}

export const mockLoadProductsByCategoryRepository = (): LoadProductsByCategoryRepository => {
  class LoadProductsByCategoryRepositoryStub implements LoadProductsByCategoryRepository {
    async loadByCategory (category: string): Promise<ProductModel[]> {
      return Promise.resolve(mockProducts())
    }
  }

  return new LoadProductsByCategoryRepositoryStub()
}
