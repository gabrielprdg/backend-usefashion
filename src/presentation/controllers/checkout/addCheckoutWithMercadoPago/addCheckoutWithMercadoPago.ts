import { MercadopagoService } from '../../../../infra/checkout/mercadoPagoPayment/mercadoPagoPayment'
import { badRequest, ok } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCheckoutMercadoPagoController implements Controller {
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
        preference
      } = httpRequest.body

      const Mercadopago = new MercadopagoService()
      const res = await Mercadopago.executeWithMercadoPago({
        preference
      })

      return ok(res)
    } catch (err) {
      console.log(err)
    }
  }
}
