import { ProductModel } from '../../../../domain/models/product'
import { LoadProducts } from '../../../../domain/useCases/product/loadProducts'
import { LoadProductsRepository } from '../../../protocols/db/product/loadProductsRepository'

export class DbLoadProducts implements LoadProducts {
  private readonly loadProductsRepository: LoadProductsRepository
  constructor (loadProductsRepository: LoadProductsRepository) {
    this.loadProductsRepository = loadProductsRepository
  }

  async loadAll (): Promise<ProductModel[]> {
    const products = await this.loadProductsRepository.loadAll()
    return products
  }
}
