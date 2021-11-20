import { ProductModel } from '../../../../domain/models/product'
import { LoadProductsByCategory } from '../../../../domain/useCases/product/loadProductsByCategory'
import { LoadProductsByCategoryRepository } from '../../../protocols/db/product/loadProductsByCategory'

export class DbLoadProductsByCategory implements LoadProductsByCategory {
  private readonly loadProductsByCategoryRepository: LoadProductsByCategoryRepository
  constructor (loadProductByCategoryRepository: LoadProductsByCategoryRepository) {
    this.loadProductsByCategoryRepository = loadProductByCategoryRepository
  }

  async loadByCategory (category: string): Promise<ProductModel[]> {
    const products = await this.loadProductsByCategoryRepository.loadByCategory(category)
    return products
  }
}
