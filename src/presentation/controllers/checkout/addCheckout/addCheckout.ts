import mercadopago from 'mercadopago'
import { MercadopagoService } from '../../../../infra/checkout/mercadoPago/MercadopagoService'
import { ServerError } from '../../../errors'
import { badRequest, created, noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCheckoutController implements Controller {

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
        token,
        payment_method_id,
        transaction_amount,
        description,
        installments,
        email
      } = httpRequest.body
    
      const Mercadopago = new MercadopagoService()
      const { status, ...rest } = await Mercadopago.execute({
        token,
        payment_method_id,
        transaction_amount,
        description,
        installments,
        email
      })


      return ok(rest)
     
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
