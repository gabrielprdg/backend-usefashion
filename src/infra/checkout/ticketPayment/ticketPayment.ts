import mercadopago from 'mercadopago'

import * as dotenv from 'dotenv'

dotenv.config()


type IndentificationType = {
  type: string
  number: string
}

type payerType = {
  email: string
  first_name: string
  last_name: string
  identification: IndentificationType 
}

interface TicketRequest {
  transaction_amount: number
  description: string
  payment_method_id: string
  payer: payerType

}

class MercadopagoServiceWithTicktet {
  async executeWithTicket({
    transaction_amount,
    description,
    payment_method_id,
    payer
  }: TicketRequest): Promise<any> {
    mercadopago.configurations.setAccessToken(
      process.env.ACCESS_TOKEN as string
    )

    return await mercadopago.payment
    .create({
      transaction_amount,
      description,
      payment_method_id,
      payer
    })
    .then(async (data) => {
      const { status, response } = data

      return {
        status,
        response
      }
    })
  }
}

export { MercadopagoServiceWithTicktet }
