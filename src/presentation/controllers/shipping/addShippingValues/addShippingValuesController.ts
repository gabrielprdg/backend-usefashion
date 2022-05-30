import mercadopago from 'mercadopago'
import { MercadopagoServiceWithCreditCard } from '../../../../infra/checkout/creditCardPayment/creditCardPayment'
import { ShippingDetails } from '../../../../infra/shipping/shippingValue'

import { ServerError } from '../../../errors'
import { badRequest, created, noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddShippingValuesController implements Controller {

 
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{

      const {
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nCdServico, //Array com os códigos de serviço
        nVlDiametro,
      } = httpRequest.body
   
      const ShippingValues = new ShippingDetails()
      const res = await ShippingValues.loadPriceData({
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nCdServico, //Array com os códigos de serviço
        nVlDiametro,
      })

      console.log(res)

      return ok(res)
 
    } catch(err) {
      console.log(err)
    }
  }
}
