import {
  PurchasedProduct,
  User
} from '../../models/order'

export type AddOrderParams = {
  user: User
  product: PurchasedProduct
  created_at: Date
}

export interface AddOrder {
  add: (addOrderParams: AddOrderParams) => Promise<void>
}
