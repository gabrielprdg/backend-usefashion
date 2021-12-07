import { AddCategoryParams } from '../useCases/category/addCategory'

export const mockAddCategoryParams = (): AddCategoryParams => ({
  name: 'any_field',
  createdAt: new Date()
})
