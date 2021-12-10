import { AddCategoryRepository } from '../../../../data/protocols/db/category/addCategoryRepository'
import { LoadCategoriesRepository } from '../../../../data/protocols/db/category/loadCategoriesRepository'
import { CategoryModel } from '../../../../domain/models/category'
import { AddCategoryParams } from '../../../../domain/useCases/category/addCategory'
import { mongoHelper } from '../helper/mongoHelper'

export class CategoryMongoRepository implements AddCategoryRepository, LoadCategoriesRepository {
  async add (categoryData: AddCategoryParams):Promise<void> {
    const categoryCollection = await mongoHelper.getCollection('categories')
    return categoryCollection.insertOne(categoryData)
  }

  async loadAll (): Promise<CategoryModel[]> {
    const categoriesCollection = await mongoHelper.getCollection('categories')
    const categories = await categoriesCollection.find().toArray()
    return categories
  }
}
