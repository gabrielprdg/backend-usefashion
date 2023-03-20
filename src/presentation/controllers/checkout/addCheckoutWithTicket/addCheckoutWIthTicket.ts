import { MercadopagoServiceWithTicktet } from '../../../../infra/checkout/ticketPayment/ticketPayment'

import { badRequest, ok } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCheckoutTicketController implements Controller {
  private readonly validation: Validation
  constructor (validation: Validation) {
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const {
        transaction_amount,
        description,
        payment_method_id,
        payer
      } = httpRequest.body

      const Mercadopago = new MercadopagoServiceWithTicktet()
      const res = await Mercadopago.executeWithTicket({
        transaction_amount,
        description,
        payment_method_id,
        payer
      })

      return ok(res)
    } catch (err) {
      console.log(err)
    }
  }
}
