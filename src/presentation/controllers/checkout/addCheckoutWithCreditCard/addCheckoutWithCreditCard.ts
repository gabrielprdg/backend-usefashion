import mercadopago from 'mercadopago'
import { MercadopagoServiceWithCreditCard } from '../../../../infra/checkout/creditCardPayment/creditCardPayment'

import { ServerError } from '../../../errors'
import { badRequest, created, noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCheckoutCreditCardController implements Controller {

  private readonly validation: Validation
  constructor (validation: Validation) {
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      console.log(httpRequest)
  
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
  
      mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN as string);



      return ok(res)
 
    } catch(err) {
      console.log(err)
    }
  }
}
