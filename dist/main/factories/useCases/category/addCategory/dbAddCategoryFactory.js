"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddCategory = void 0;
const dbAddCategory_1 = require("../../../../../data/useCases/category/addCategory/dbAddCategory");
const categoryMongoRepository_1 = require("../../../../../infra/db/mongoDb/category/categoryMongoRepository");
const makeDbAddCategory = () => {
    const categoryMongoRepository = new categoryMongoRepository_1.CategoryMongoRepository();
    return new dbAddCategory_1.DbAddCategory(categoryMongoRepository);
};
exports.makeDbAddCategory = makeDbAddCategory;
//# sourceMappingURL=dbAddCategoryFactory.js.map