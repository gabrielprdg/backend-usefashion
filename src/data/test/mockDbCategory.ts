import { CategoryModel } from '../../domain/models/category'
import { mockCategories } from '../../domain/test/mockCategory'
import { AddCategoryParams } from '../../domain/useCases/category/addCategory'
import { AddCategoryRepository } from '../protocols/db/category/addCategoryRepository'
import { LoadCategoriesRepository } from '../protocols/db/category/loadCategoriesRepository'

export const mockAddCategoryRepository = (): AddCategoryRepository => {
  class AddCategoryRepositoryStub implements AddCategoryRepository {
    async add (categoryData: AddCategoryParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddCategoryRepositoryStub()
}

export const mockLoadCategoriesRepository = (): LoadCategoriesRepository => {
  class LoadCategoriesRepositoryStub implements LoadCategoriesRepository {
    async loadAll (): Promise<CategoryModel[]> {
      return Promise.resolve(mockCategories())
    }
  }

  return new LoadCategoriesRepositoryStub()
}
