import { forbidden, ok, serverError } from '../../../helpers/http/httpHelper'
import { LoadProductById } from '../../../../domain/useCases/product/loadProductById'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'
import { InvalidParamError } from '../../../errors'

export class LoadProductByIdController implements Controller {
  private readonly loadProductById: LoadProductById
  constructor (loadProductById: LoadProductById) {
    this.loadProductById = loadProductById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const product = await this.loadProductById.loadById(id)
      console.log(product)
      if (product) {
        return ok(product)
      } else {
        return forbidden(new InvalidParamError('productId'))
      }
    } catch (err) {
      return serverError(new Error())
    }
  }
}
