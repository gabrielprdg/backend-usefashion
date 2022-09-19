import { AddProductRepository } from '../../../../data/protocols/db/product/addProductRepository'
import { LoadProductByIdRepository } from '../../../../data/protocols/db/product/loadProductByIdRepository'
import { LoadProductsByCategoryRepository } from '../../../../data/protocols/db/product/loadProductsByCategory'
import { LoadProductsRepository } from '../../../../data/protocols/db/product/loadProductsRepository'
import { ProductModel } from '../../../../domain/models/product'
import { AddProductParams } from '../../../../domain/useCases/product/addProduct'
import { mongoHelper } from '../helper/mongoHelper'
import { ObjectId } from 'mongodb'
import { DeleteProductByIdRepository } from '../../../../data/protocols/db/product/deleteProductByIdRepository'

export class ProductMongoRepository implements AddProductRepository, LoadProductByIdRepository, LoadProductsByCategoryRepository, LoadProductsRepository, DeleteProductByIdRepository {
  async add (productData: AddProductParams): Promise<void> {
    const productCollection = await mongoHelper.getCollection('products')
    await productCollection.insertOne(productData)
  }

  async loadByCategory (category: string): Promise<ProductModel[]> {
    const productCollection = await mongoHelper.getCollection('products')
    const products = await productCollection.find({ category: category }).toArray()
    return mongoHelper.mapCollection(products)
  }

  async loadById (id: string): Promise<ProductModel> {
    const productCollection = await mongoHelper.getCollection('products')
    const product = await productCollection.findOne({ _id: new ObjectId(id) })
    return product && mongoHelper.map(product)
  }

  async loadAll (): Promise<ProductModel[]> {
    const productCollection = await mongoHelper.getCollection('products')
    const products = await productCollection.find().toArray()
    return mongoHelper.mapCollection(products)
  }

  async deleteById (id: string): Promise<void> {
    const productCollection = await mongoHelper.getCollection('products')
    await productCollection.deleteOne({ _id: new ObjectId(id) })
  }
}
