import { LoadCategories } from '../../../../domain/useCases/category/loadCategories'
import { noContent, ok, serverError } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadCategoriesController implements Controller {
  private readonly loadCategories: LoadCategories

  constructor (loadCategories: LoadCategories) {
    this.loadCategories = loadCategories
  }

  async handle (HttpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const categories = await this.loadCategories.loadAll()
      return categories.length ? ok(categories) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
