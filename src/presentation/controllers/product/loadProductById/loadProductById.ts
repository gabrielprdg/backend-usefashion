import { forbidden, ok, serverError } from '../../../../presentation/helpers/http/httpHelper'
import { LoadProductById } from '../../../../domain/useCases/product/loadProductById'
import { Controller, HttpRequest, HttpResponse } from '../../../../presentation/protocols'
import { InvalidParamError } from '../../../errors'

export class LoadProductByIdController implements Controller {
  private readonly loadProductById: LoadProductById
  constructor (loadProductById: LoadProductById) {
    this.loadProductById = loadProductById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { productId } = httpRequest.params
      const product = await this.loadProductById.loadById(productId)
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
