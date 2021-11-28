import { AddCategoryParams } from '../../domain/useCases/category/addCategory'
import { AddCategoryRepository } from '../protocols/db/category/addCategoryRepository'

export const mockAddCategoryRepository = (): AddCategoryRepository => {
  class AddCategoryRepositoryStub implements AddCategoryRepository {
    async add (categoryData: AddCategoryParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddCategoryRepositoryStub()
}
