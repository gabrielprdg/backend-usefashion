import { CategoryModel } from '../../../../domain/models/category'
import { LoadCategories } from '../../../../domain/useCases/category/loadCategories'
import { LoadCategoriesRepository } from '../../../protocols/db/category/loadCategoriesRepository'

export class DbLoadCategories implements LoadCategories {
  private readonly loadCategoriesRepository: LoadCategoriesRepository
  constructor (loadCategoryRepository: LoadCategoriesRepository) {
    this.loadCategoriesRepository = loadCategoryRepository
  }

  async loadAll (): Promise<CategoryModel[]> {
    const categories = await this.loadCategoriesRepository.loadAll()
    return categories
  }
}
