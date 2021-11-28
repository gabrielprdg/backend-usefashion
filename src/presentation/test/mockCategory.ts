import { AddCategory, AddCategoryParams } from '../../domain/useCases/category/addCategory'

export const mockAddCategory = (): AddCategory => {
  class AddCategoryStub implements AddCategory {
    async add (addCategoryParams: AddCategoryParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddCategoryStub()
}
