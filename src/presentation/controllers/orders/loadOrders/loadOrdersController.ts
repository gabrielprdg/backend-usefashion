import { LoadOrders } from '../../../../domain/useCases/order/loadOrders'
import { ServerError } from '../../../errors'
import { noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../protocols'

export class LoadOrdersController implements Controller {
  private readonly loadOrders: LoadOrders

  constructor (loadOrders: LoadOrders) {
    this.loadOrders = loadOrders
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const orders = await this.loadOrders.loadAll()

      return orders.length ? ok(orders) : noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
