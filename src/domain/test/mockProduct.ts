import { ProductModel } from '../models/product'
import { AddProductParams } from '../useCases/product/addProduct'

export const mockProductModel = (): ProductModel => ({
  id: 'any_id',
  name: 'any_name',
  description: 'any_description',
  category: 'any_category',
  price: 3,
  images: [{
    nameFile: 'any_name',
    size: 'any_size',
    key: 'any_key',
    url: 'any_url'
  }],
  createdAt: new Date()
})

export const mockAddProductParams = (): AddProductParams => ({
  name: 'any_field',
  description: 'any_description',
  category: 'any_category',
  price: 4,
  images: [{
    nameFile: 'any_name',
    size: 'any_size',
    key: 'any_key',
    url: 'any_url'
  }],
  createdAt: new Date()
})

export const mockProducts = (): ProductModel[] => {
  return [
    {
      id: 'any_id',
      name: 'any_name',
      description: 'any_description',
      category: 'any_category',
      price: 3,
      images: [{
        nameFile: 'any_name',
        size: 'any_size',
        key: 'any_key',
        url: 'any_url'
      }],
      createdAt: new Date()
    },
    {
      id: 'any_id2',
      name: 'any_name2',
      description: 'any_description2',
      category: 'any_category2',
      price: 2,
      images: [{
        nameFile: 'any_name',
        size: 'any_size',
        key: 'any_key',
        url: 'any_url'
      }],
      createdAt: new Date()
    }
  ]
}
