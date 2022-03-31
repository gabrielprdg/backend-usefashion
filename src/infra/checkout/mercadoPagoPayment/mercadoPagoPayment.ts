import mercadopago from 'mercadopago'

import * as dotenv from 'dotenv'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'

dotenv.config()


type itemsProps = {
  title: string
  unit_price: number
  quantity: number
}



type MercadoPagoRequest = {
  preference: CreatePreferencePayload
}


class MercadopagoService {
  async executeWithMercadoPago({
    preference
  }: MercadoPagoRequest): Promise<any> {
    mercadopago.configure({
      access_token: `${process.env.ACCESS_TOKEN}`,
      client_id: `${process.env.CLIENT_ID}`,
      client_secret: `${process.env.CLIENT_SECRET}`
    });

    const {status, response} = await mercadopago.preferences.create(preference)
    return {status, response}
  }
}

export { MercadopagoService }
