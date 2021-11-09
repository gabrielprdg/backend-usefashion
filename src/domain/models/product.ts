export type Url = {
  url: string
}

export type ProductModel = {
  id: string
  name: string
  description: string
  price: number
  images: Array<Url>
  createdAt: Date
}
