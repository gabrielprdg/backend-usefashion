import { AddProductRepository } from '../../../../data/protocols/db/product/addProductRepository'
import { AddProduct, AddProductParams } from '../../../../domain/useCases/product/addProduct'

/*
  my use case class, or my domain class,
  must not point to or implement a class linked to the infra,
  it's infra that must point to the domain classes
  AddProductRepository is a abstraction

  apontar = depender/dependência ou ate mesmo implementar
*/
export class DbAddProduct implements AddProduct {
  private readonly addProductRepository: AddProductRepository
  constructor (addProductRepository: AddProductRepository) {
    this.addProductRepository = addProductRepository
  }

  async add (productData: AddProductParams): Promise<void> {
    await this.addProductRepository.add(productData)
  }
}
