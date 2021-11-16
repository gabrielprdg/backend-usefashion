import { ProductModel } from '../../../../domain/models/product'
import { LoadProducts } from '../../../../domain/useCases/product/loadProducts'
import { LoadProductsRepository } from '../../../protocols/db/product/loadProductsRepository'

export class DbLoadProducts implements LoadProducts {
  private readonly loadProductsRepository: LoadProductsRepository
  constructor (loadProdutsRepository: LoadProductsRepository) {
    this.loadProductsRepository = loadProdutsRepository
  }

  async loadAll (): Promise<ProductModel[]> {
    const products = await this.loadProductsRepository.loadAll()
    return products
  }
}
