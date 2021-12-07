import { AddCategoryRepository } from '../../../../data/protocols/db/category/addCategoryRepository'
import { AddCategoryParams } from '../../../../domain/useCases/category/addCategory'
import { mongoHelper } from '../helper/mongoHelper'

export class CategoryMongoRepository implements AddCategoryRepository {
  async add(categoryData: AddCategoryParams):Promise<void> {
    const categoryCollection = await mongoHelper.getCollection('categories')
    return categoryCollection.insertOne(categoryData)
  }
}