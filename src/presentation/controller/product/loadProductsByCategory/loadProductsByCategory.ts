import { LoadProductsByCategory } from '../../../../domain/useCases/product/loadProductsByCategory'
import { InvalidParamError } from '../../../errors'
import { forbidden, ok, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadProductsByCategoryController implements Controller {
  private readonly loadProductsByCategory: LoadProductsByCategory
  constructor (loadProductsByCategory: LoadProductsByCategory) {
    this.loadProductsByCategory = loadProductsByCategory
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { category } = httpRequest.params
      const products = await this.loadProductsByCategory.loadByCategory(category)
      if (products) {
        return ok(products)
      } else {
        return forbidden(new InvalidParamError('category'))
      }
    } catch (err) {
      return serverError(new Error())
    }
  }
}
