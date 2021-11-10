import { AddProductRepository } from '../../../../data/protocols/db/product/addProductRepository'
import { AddProduct, AddProductParams } from '../../../../domain/useCases/product/addProduct'

export class DbAddProduct implements AddProduct {
  private readonly addProductRepository: AddProductRepository
  constructor (addProductRepository: AddProductRepository) {
    this.addProductRepository = addProductRepository
  }

  async add (productData: AddProductParams): Promise<void> {
    await this.addProductRepository.add(productData)
  }
}
