"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
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
}
exports.CategoryMongoRepository = CategoryMongoRepository;
//# sourceMappingURL=categoryMongoRepository.js.map