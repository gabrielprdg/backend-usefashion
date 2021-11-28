import { AddProductParams } from '../useCases/product/addProduct'

export const mockAddCategoryParams = (): AddProductParams => ({
  name: 'any_field',
  description: 'any_description',
  category: 'any_category',
  price: 4,
  images: [{
    url: 'any_url'
  }],
  createdAt: new Date()
})
