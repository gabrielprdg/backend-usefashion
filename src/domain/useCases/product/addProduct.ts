import { ImageData } from '../../../domain/models/product'

export type AddProductParams = {
  name: string
  description: string
  category: string
  price: number
  images: ImageData[]
  createdAt: Date
}

export interface AddProduct {
  add: (addProductParams: AddProductParams) => Promise<void>
}
