import { LoadProducts } from '../../../../domain/useCases/product/loadProducts'
import { noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadProductsController implements Controller {
  private readonly loadProducts: LoadProducts

  constructor (loadProducts: LoadProducts) {
    this.loadProducts = loadProducts
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const products = await this.loadProducts.loadAll()
      return products.length ? ok(products) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
