import { DeleteProductById } from '../../../../domain/useCases/product/deleteProductById'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class DeleteProductByIdController implements Controller {
  private readonly deleteProductById: DeleteProductById
  constructor (deleteProductById: DeleteProductById) {
    this.deleteProductById = deleteProductById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { productId } = httpRequest.params

      await this.deleteProductById.delete(productId)
      return noContent()
    } catch (err) {
      return serverError(new Error())
    }
  }
}
