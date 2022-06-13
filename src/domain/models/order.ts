export type User = {
  name: string
  surname: string
  telephone: string
}

export type Address = {
  street: string
  number: string
  complement: string
  district: string
}


export type PurchasedProduct = {
  name: string
  price: string
  color: string
  size: string
}


export interface OrderModel {
  user: User
  product: PurchasedProduct
  address: Address 
  status: string
}