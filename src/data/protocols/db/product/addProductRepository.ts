import { AddProductParams } from '../../../../domain/useCases/product/addProduct'

export interface AddProductRepository {
  add: (productData: AddProductParams) => Promise<void>
}
