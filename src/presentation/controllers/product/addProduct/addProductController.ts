/* eslint-disable no-unused-expressions */
import { ServerError } from '../../../errors'
import { AddProduct } from '../../../../domain/useCases/product/addProduct'
import { badRequest, noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'
import { ImageData } from '../../../../domain/models/product'

export class AddProductController implements Controller {
  private readonly addProduct: AddProduct
  private readonly validation: Validation
  constructor (addProduct: AddProduct, validation: Validation) {
    this.addProduct = addProduct
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      console.log('man',httpRequest)

      const files = httpRequest.files

      const images = files.map(item => {
        const newi = {} as ImageData

        newi.name = item.originalname
        newi.size = item.size
        newi.key = item.key
        newi.url = item.location

        return newi
      })

      const { name, description, category, price } = httpRequest.body
      await this.addProduct.add({ name, description, category, price, images, createdAt: new Date(), count:1 })

      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
