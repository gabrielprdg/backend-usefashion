import { AddCategory, AddCategoryParams } from '../../../../../domain/useCases/category/addCategory'
import { AddCategoryRepository } from '../../../../protocols/db/category/addCategoryRepository'

export class DbAddCategory implements AddCategory {
  private readonly addCategoryRepository: AddCategoryRepository
  constructor (addCategoryRepository: AddCategoryRepository) {
    this.addCategoryRepository = addCategoryRepository
  }

  async add (categoryData: AddCategoryParams):Promise<void> {
    await this.addCategoryRepository.add(categoryData)
  }
}
