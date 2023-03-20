import { DeleteOrderById } from '../../../../domain/useCases/order/deleteOrderById'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class DeleteOrderByIdController implements Controller {
  private readonly deleteOrderById: DeleteOrderById

  constructor (deleteOrderById: DeleteOrderById) {
    this.deleteOrderById = deleteOrderById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        id
      } = httpRequest.params

      await this.deleteOrderById.delete(id)

      return noContent()
    } catch (err: any) {
      return serverError(err)
    }
  }
}
