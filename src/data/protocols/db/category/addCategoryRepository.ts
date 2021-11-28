import { AddCategoryParams } from '../../../../domain/useCases/category/addCategory'

export interface AddCategoryRepository {
  add: (categoryData: AddCategoryParams) => Promise<void>
}
