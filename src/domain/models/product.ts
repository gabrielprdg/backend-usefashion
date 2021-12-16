export type ImageData = {
  name: string
  size: number
  key: string
  url: string
}

export type ProductModel = {
  id: string
  name: string
  description: string
  category: string
  price: number
  images: ImageData[]
  createdAt: Date
}
