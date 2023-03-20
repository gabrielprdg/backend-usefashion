import { OrderModel } from '../models/order'
import { AddOrderParams } from '../useCases/order/addOrder'

export const mockAddOrderParams = (): AddOrderParams => ({
  user: {
    id: 'any_user_id',
    firstName: 'any_name',
    surname: 'any_surname',
    address: {
      streetName: 'any_street_name',
      streetNumber: 'any_number',
      state: 'any_state',
      cep: 'any_cep',
      complement: 'any_complement',
      district: 'any_district'
    },
    doc: 'any_document',
    email: 'any_email',
    telephone: 'any_telephone'
  },
  product: {
    id: 'any_product_id',
    name: 'any_product_name',
    description: 'any_description',
    count: 3,
    price: 23.3,
    shippingType: 'any_shipping',
    productSize: 'any_size',
    colors: 'any_color'
  },
  created_at: new Date()
})

export const mockOrders = (): OrderModel[] => {
  return [{
    id: 'any_id',
    user: {
      id: 'any_user_id',
      firstName: 'any_name',
      surname: 'any_surname',
      address: {
        streetName: 'any_street_name',
        streetNumber: 'any_number',
        state: 'any_state',
        cep: 'any_cep',
        complement: 'any_complement',
        district: 'any_district'
      },
      doc: 'any_document',
      email: 'any_email',
      telephone: 'any_telephone'
    },
    product: {
      id: 'any_product_id',
      name: 'any_product_name',
      description: 'any_description',
      count: 3,
      price: 23.3,
      shippingType: 'any_shipping',
      productSize: 'any_size',
      colors: 'any_color'
    },
    created_at: new Date()
  }, {
    id: 'any_id_2',
    user: {
      id: 'any_user_id_2',
      firstName: 'any_name_2',
      surname: 'any_surname_2',
      address: {
        streetName: 'any_street_name_2',
        streetNumber: 'any_number_2',
        state: 'any_state_2',
        cep: 'any_cep_2',
        complement: 'any_complement_2',
        district: 'any_district_2'
      },
      doc: 'any_document_2',
      email: 'any_email_2',
      telephone: 'any_telephone_2'
    },
    product: {
      id: 'any_product_id_2',
      name: 'any_product_name_2',
      description: 'any_description_2',
      count: 3,
      price: 23.3,
      shippingType: 'any_shipping_2',
      productSize: 'any_size_2',
      colors: 'any_color_2'
    },
    created_at: new Date()
  }]
}

export const mockOrderParam = (): OrderModel => ({
  id: 'any_id',
  user: {
    id: 'any_user_id',
    firstName: 'any_name',
    surname: 'any_surname',
    address: {
      streetName: 'any_street_name',
      streetNumber: 'any_number',
      state: 'any_state',
      cep: 'any_cep',
      complement: 'any_complement',
      district: 'any_district'
    },
    doc: 'any_document',
    email: 'any_email',
    telephone: 'any_telephone'
  },
  product: {
    id: 'any_product_id',
    name: 'any_product_name',
    description: 'any_description',
    count: 3,
    price: 23.3,
    shippingType: 'any_shipping',
    productSize: 'any_size',
    colors: 'any_color'
  },
  created_at: new Date()
})
