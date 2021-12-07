import { CategoryModel } from '../../models/category'

export interface LoadCategories {
  loadAll: () => Promise<CategoryModel[]>
}
