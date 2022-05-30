import {calcularPrecoPrazo, consultarCep, rastrearEncomendas} from 'correios-brasil';
import * as dotenv from 'dotenv'
import { LoadShippingPrice, LoadShippingPriceParams, ShippingPriceModel } from '../../data/protocols/shippingDetails/shippingPrice'

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



class ShippingDetails {
  async loadPriceData (args: LoadShippingPriceParams): Promise<any> {
  
    return await calcularPrecoPrazo(args).then((response) => {
      return response
    });
 
  }
}

export { ShippingDetails }