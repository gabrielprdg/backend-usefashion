"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteCategoryById = void 0;
const dbDeleteCategoryById_1 = require("../../../../../data/useCases/category/deleteCategory/dbDeleteCategoryById");
const categoryMongoRepository_1 = require("../../../../../infra/db/mongoDb/category/categoryMongoRepository");
const makeDbDeleteCategoryById = () => {
    const categoryMongoRepository = new categoryMongoRepository_1.CategoryMongoRepository();
    return new dbDeleteCategoryById_1.DbDeleteCategoryById(categoryMongoRepository);
};
exports.makeDbDeleteCategoryById = makeDbDeleteCategoryById;
//# sourceMappingURL=dbDeleteCategoryById.js.map