import { AddCategory } from '../../../../domain/useCases/category/addCategory'
import { ServerError } from '../../../errors'
import { badRequest, noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class AddCategoryController implements Controller {
  private readonly addCategory: AddCategory
  private readonly validation: Validation

  constructor (addCategory: AddCategory, validation: Validation) {
    this.addCategory = addCategory
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name } = httpRequest.body
      await this.addCategory.add({ name, createdAt: new Date() })
      return noContent()
    } catch (err) {
      return serverError(new ServerError())
    }
  }
}
