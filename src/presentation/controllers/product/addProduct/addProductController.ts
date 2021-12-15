import { ServerError } from '../../../errors'
import { AddProduct } from '../../../../domain/useCases/product/addProduct'
import { badRequest, noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddProductController implements Controller {
  private readonly addProduct: AddProduct
  private readonly validation: Validation
  constructor (addProduct: AddProduct, validation: Validation) {
    this.addProduct = addProduct
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest)
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { originalName: nameFile, size, fileName: key } = httpRequest.file
      const images = [{ nameFile, size, key, url: '' }]
      const { name, description, category, price } = httpRequest.body
      await this.addProduct.add({ name, description, category, price, images, createdAt: new Date() })

      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
