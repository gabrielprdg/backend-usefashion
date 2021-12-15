import { imageData } from '../../../domain/models/product'

export type AddProductParams = {
  name: string
  description: string
  category: string
  price: number
  images: imageData[]
  createdAt: Date
}

export interface AddProduct {
  add: (addProductParams: AddProductParams) => Promise<void>
}
