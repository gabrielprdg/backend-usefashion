import { LoadOrders } from "../../../../domain/useCases/order/loadOrders";
import { ServerError } from "../../../errors";
import { noContent, serverError } from "../../../helpers/http/httpHelper";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "../../../protocols";

export class LoadOrdersController implements Controller {
  private readonly loadOrders: LoadOrders

  constructor(loadOrders: LoadOrders) {
    this.loadOrders = loadOrders
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      
      const { user, product } = httpRequest.body
      const orders = await this.loadOrders.loadAll()

      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}