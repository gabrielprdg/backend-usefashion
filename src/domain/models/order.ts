export type User = {
  email: string
  firstName: string
  surname: string
  telephone: string
  address: Address
  doc: string
}

export type Address = {
  streetName: string
  streetNumber: string
  complement: string
  district: string
  cep: string
  state: string
}


export type Images = {
  name: string
  size: number
  key: string
  url: string
}

export type PurchasedProduct = {
  id: string
  images: Array<Images>
  name: string
  description: string
  price: number
  colors?: string
  count: number
  productSize?: string
  shippingType: string
}


export interface OrderModel {
  id: string
  user: User
  product: PurchasedProduct
}