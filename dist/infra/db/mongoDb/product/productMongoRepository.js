"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
const mongodb_1 = require("mongodb");
class ProductMongoRepository {
    async add(productData) {
        const productCollection = await mongoHelper_1.mongoHelper.getCollection('products');
        await productCollection.insertOne(productData);
    }
    async loadByCategory(category) {
        const productCollection = await mongoHelper_1.mongoHelper.getCollection('products');
        const products = await productCollection.find({ category: category }).toArray();
        return mongoHelper_1.mongoHelper.mapCollection(products);
    }
    async loadById(id) {
        const productCollection = await mongoHelper_1.mongoHelper.getCollection('products');
        const product = await productCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
        return product && mongoHelper_1.mongoHelper.map(product);
    }
    async loadAll() {
        const productCollection = await mongoHelper_1.mongoHelper.getCollection('products');
        const products = await productCollection.find().toArray();
        return mongoHelper_1.mongoHelper.mapCollection(products);
    }
}
exports.ProductMongoRepository = ProductMongoRepository;
//# sourceMappingURL=productMongoRepository.js.map