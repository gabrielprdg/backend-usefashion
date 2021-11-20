import { ProductModel } from '../../../../domain/models/product'

export interface LoadProductsByCategoryRepository {
  loadByCategory: (category: string) => Promise<ProductModel[]>
}
