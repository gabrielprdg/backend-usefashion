import { ProductModel } from '../../models/product'

export interface LoadProductsByCategory {
  loadByCategory: (category: string) => Promise<ProductModel[]>
}
