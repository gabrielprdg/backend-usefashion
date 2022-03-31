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

interface IOrderRequest {
  transaction_amount: number
  token: string
  description: string
  installments: number
  payment_method_id: string
  email: string
}

interface IResultResponseMp {
  status: number
  id: string
  transaction_amount: number
  date_approved: string
  first_six_digits: string
  last_four_digits: string
  display_name: string
}

class MercadopagoServiceWithCreditCard {
  async executewithCreditCard({
    transaction_amount,
    token,
    description,
    installments,
    payment_method_id,
    email
  }: IOrderRequest): Promise<IResultResponseMp> {
    console.log('acstoken',process.env.ACCESS_TOKEN as string)
    mercadopago.configurations.setAccessToken(
      `${process.env.ACCESS_TOKEN}`
    )

    return await mercadopago.payment
      .save({
        transaction_amount,
        token,
        description,
        installments,
        payment_method_id,
        payer: { email }
      })
      .then(async (data) => {
        const { status, response } = data
        const { id, transaction_amount, date_approved, card } = response
        const { first_six_digits, last_four_digits, cardholder } = card

        return {
          status,
          id,
          transaction_amount,
          date_approved,
          first_six_digits,
          last_four_digits,
          display_name: cardholder.name
        }
      })
  }


}

export { MercadopagoServiceWithCreditCard}
