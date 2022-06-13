import { 
  Address,
  PurchasedProduct,
  User 
} from '../../models/order'

export type AddOrderParams = {
  user: User
  product: PurchasedProduct
  address: Address 
  status: string
}

export interface AddOrder {
  add: (addOrderParams: AddOrderParams) => Promise<void>
}