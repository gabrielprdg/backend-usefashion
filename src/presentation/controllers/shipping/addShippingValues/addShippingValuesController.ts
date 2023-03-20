import { ShippingDetails } from '../../../../infra/shipping/shippingValue'

import { ok } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class AddShippingValuesController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nCdServico, // Array com os códigos de serviço
        nVlDiametro
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
        nCdServico, // Array com os códigos de serviço
        nVlDiametro
      })

      return ok(res)
    } catch (err) {
      console.log(err)
    }
  }
}
