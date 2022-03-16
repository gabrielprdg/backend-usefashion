"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadCategories = void 0;
const dbLoadCategories_1 = require("../../../../../data/useCases/category/loadCategories/dbLoadCategories");
const categoryMongoRepository_1 = require("../../../../../infra/db/mongoDb/category/categoryMongoRepository");
const makeDbLoadCategories = () => {
    const categoryMongoRepository = new categoryMongoRepository_1.CategoryMongoRepository();
    return new dbLoadCategories_1.DbLoadCategories(categoryMongoRepository);
};
exports.makeDbLoadCategories = makeDbLoadCategories;
//# sourceMappingURL=dbLoadCategoriesFactory.js.map