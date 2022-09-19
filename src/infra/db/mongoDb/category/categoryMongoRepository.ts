import { AddCategoryRepository } from '../../../../data/protocols/db/category/addCategoryRepository'
import { DeleteCategoryByIdRepository } from '../../../../data/protocols/db/category/deleteCategoryByIdRepository'
import { LoadCategoriesRepository } from '../../../../data/protocols/db/category/loadCategoriesRepository'
import { CategoryModel } from '../../../../domain/models/category'
import { AddCategoryParams } from '../../../../domain/useCases/category/addCategory'
import { mongoHelper } from '../helper/mongoHelper'
import { ObjectId } from 'mongodb'

export class CategoryMongoRepository implements AddCategoryRepository, LoadCategoriesRepository, DeleteCategoryByIdRepository {
  async add (categoryData: AddCategoryParams): Promise<void> {
    const categoryCollection = await mongoHelper.getCollection('categories')
    return categoryCollection.insertOne(categoryData)
  }

  async loadAll (): Promise<CategoryModel[]> {
    const categoriesCollection = await mongoHelper.getCollection('categories')
    const categories = await categoriesCollection.find().toArray()
    return categories
  }

  async deleteById (id: string): Promise<void> {
    const categoriesCollection = await mongoHelper.getCollection('categories')
    await categoriesCollection.deleteOne({ _id: new ObjectId(id) })
  }
}
