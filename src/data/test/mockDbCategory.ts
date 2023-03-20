import { CategoryModel } from '../../domain/models/category'
import { mockCategories } from '../../domain/test/mockCategory'
import { AddCategoryParams } from '../../domain/useCases/category/addCategory'
import { AddCategoryRepository } from '../protocols/db/category/addCategoryRepository'
import { DeleteCategoryByIdRepository } from '../protocols/db/category/deleteCategoryByIdRepository'
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

export const mockDeleteCategoryByIdRepository = (): DeleteCategoryByIdRepository => {
  class DeleteCategoryByIdRepositoryStub implements DeleteCategoryByIdRepository {
    async deleteById (): Promise<void> {
      return Promise.resolve()
    }
  }

  return new DeleteCategoryByIdRepositoryStub()
}
