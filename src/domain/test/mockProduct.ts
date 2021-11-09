import { ProductModel } from '../models/product'
import { AddProductParams } from '../useCases/product/addProduct'

export const mockProductModel = (): ProductModel => ({
  id: 'any_id',
  name: 'any_name',
  description: 'any_description',
  price: 3,
  images: [{
    url: 'any'
  }],
  createdAt: new Date()
})

export const mockAddProductParams = (): AddProductParams => ({
  name: 'any_field',
  description: 'any_description',
  price: 4,
  images: [{
    url: 'any_url'
  }],
  createdAt: new Date()
})
