import { CategoryModel } from '../models/category'
import { AddCategoryParams } from '../useCases/category/addCategory'

export const mockAddCategoryParams = (): AddCategoryParams => ({
  name: 'any_name',
  createdAt: new Date()
})

export const mockCategories = (): CategoryModel[] => {
  return [
    {
      id: 'any_id',
      name: 'any_name',
      createdAt: new Date()
    },
    {
      id: 'any_id',
      name: 'any_name',
      createdAt: new Date()
    }
  ]
}
