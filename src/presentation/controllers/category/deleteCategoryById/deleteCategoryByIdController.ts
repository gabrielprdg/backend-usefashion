import { DeleteCategoryById } from '../../../../domain/useCases/category/deleteCategoryById'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class DeleteCategoryByIdController implements Controller {
  private deleteCategoryById: DeleteCategoryById

  constructor (deleteCategoryById: DeleteCategoryById) {
    this.deleteCategoryById = deleteCategoryById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { categoryId } = httpRequest.params

      await this.deleteCategoryById.delete(categoryId)
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
