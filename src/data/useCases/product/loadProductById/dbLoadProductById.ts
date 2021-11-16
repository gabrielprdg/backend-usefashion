import { ProductModel } from '../../../../domain/models/product'
import { LoadProductById } from '../../../../domain/useCases/product/loadProductById'
import { LoadProductByIdRepository } from '../../../protocols/db/product/loadProductByIdRepository'

export class DbLoadProductById implements LoadProductById {
  private readonly loadProductByIdRepository: LoadProductByIdRepository
  constructor (loadProductByIdRepository: LoadProductByIdRepository) {
    this.loadProductByIdRepository = loadProductByIdRepository
  }

  async loadById (id: string): Promise<ProductModel> {
    const product = await this.loadProductByIdRepository.loadById(id)
    return product
  }
}
