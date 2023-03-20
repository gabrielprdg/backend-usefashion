import { AddOrder } from '../../../../domain/useCases/order/addOrder'
import { ServerError } from '../../../errors'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../protocols'

export class AddOrderController implements Controller {
  private readonly addOrder: AddOrder

  constructor (addOrder: AddOrder) {
    this.addOrder = addOrder
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { user, product } = httpRequest.body
      await this.addOrder.add({ user, product, created_at: new Date() })

      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
