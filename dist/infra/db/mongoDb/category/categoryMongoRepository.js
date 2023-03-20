"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
const mongodb_1 = require("mongodb");
class CategoryMongoRepository {
    async add(categoryData) {
        const categoryCollection = await mongoHelper_1.mongoHelper.getCollection('categories');
        return categoryCollection.insertOne(categoryData);
    }
    async loadAll() {
        const categoriesCollection = await mongoHelper_1.mongoHelper.getCollection('categories');
        const categories = await categoriesCollection.find().toArray();
        return categories;
    }
    async deleteById(id) {
        const categoriesCollection = await mongoHelper_1.mongoHelper.getCollection('categories');
        await categoriesCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    }
}
exports.CategoryMongoRepository = CategoryMongoRepository;
//# sourceMappingURL=categoryMongoRepository.js.map