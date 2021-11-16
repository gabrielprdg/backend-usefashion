import { ProductModel } from '../../../domain/models/product'

export interface LoadProducts {
  loadAll: () => Promise<ProductModel[]>
}
