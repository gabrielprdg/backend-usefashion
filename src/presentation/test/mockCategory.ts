import { CategoryModel } from '../../domain/models/category'
import { mockCategories } from '../../domain/test/mockCategory'
import { AddCategory, AddCategoryParams } from '../../domain/useCases/category/addCategory'
import { LoadCategories } from '../../domain/useCases/category/loadCategories'

export const mockAddCategory = (): AddCategory => {
  class AddCategoryStub implements AddCategory {
    async add (addCategoryParams: AddCategoryParams): Promise<void> {
      return Promise.resolve()
    }
  }

  return new AddCategoryStub()
}

export const mockLoadCategories = (): LoadCategories => {
  class LoadCategoriesStub implements LoadCategories {
    async loadAll (): Promise<CategoryModel[]> {
      return Promise.resolve(mockCategories())
    }
  }

  return new LoadCategoriesStub()
}
