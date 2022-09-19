import {
  PurchasedProduct,
  User
} from '../../models/order'

export type AddOrderParams = {
  user: User
  product: PurchasedProduct
}

export interface AddOrder {
  add: (addOrderParams: AddOrderParams) => Promise<void>
}
