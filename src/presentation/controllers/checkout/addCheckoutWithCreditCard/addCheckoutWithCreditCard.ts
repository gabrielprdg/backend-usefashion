import mercadopago from 'mercadopago'
import { MercadopagoServiceWithCreditCard } from '../../../../infra/checkout/creditCardPayment/creditCardPayment'

import { badRequest, ok } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCheckoutCreditCardController implements Controller {
  private readonly validation: Validation
  constructor (validation: Validation) {
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      mercadopago.configurations.setAccessToken(`${process.env.ACCESS_TOKEN}`)

      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const {
        token,
        payment_method_id,
        transaction_amount,
        description,
        installments,
        email
      } = httpRequest.body

      const Mercadopago = new MercadopagoServiceWithCreditCard()
      const res = await Mercadopago.executewithCreditCard({
        token,
        payment_method_id,
        transaction_amount,
        description,
        installments,
        email
      })

      return ok(res)
    } catch (err) {
      console.log(err)
    }
  }
}
