import { AddProduct } from '../../../domain/useCases/product/addProduct'
import { badRequest, noContent } from '../../../presentation/helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class ProductController implements Controller {
  private readonly addProduct: AddProduct
  private readonly validation: Validation
  constructor (addProduct: AddProduct, validation: Validation) {
    this.addProduct = addProduct
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)

    if (error) {
      return badRequest(error)
    }

    const { name, description, price, images } = httpRequest.body
    await this.addProduct.add({ name, description, price, images, createdAt: new Date() })
    return noContent()
  }
}
