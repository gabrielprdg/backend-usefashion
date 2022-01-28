import { AddProduct } from '../../../../domain/useCases/product/addProduct'
import { ServerError } from '../../../errors'
import { badRequest, noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCheckout implements Controller {
  private readonly addProduct: AddProduct
  private readonly validation: Validation
  constructor (validation: Validation) {
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }


      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
