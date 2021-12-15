export type imageData = {
  nameFile: string
  size: string
  key: string
  url: string
}

export type ProductModel = {
  id: string
  name: string
  description: string
  category: string
  price: number
  images: imageData[]
  createdAt: Date
}
