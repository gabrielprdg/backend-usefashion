"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadProductsByCategory = void 0;
const dbLoadProductByCategory_1 = require("../../../../../data/useCases/product/loadProductByCategory/dbLoadProductByCategory");
const productMongoRepository_1 = require("../../../../../infra/db/mongoDb/product/productMongoRepository");
const makeDbLoadProductsByCategory = () => {
    const productMongoRepository = new productMongoRepository_1.ProductMongoRepository();
    return new dbLoadProductByCategory_1.DbLoadProductsByCategory(productMongoRepository);
};
exports.makeDbLoadProductsByCategory = makeDbLoadProductsByCategory;
//# sourceMappingURL=dbLoadProductssByCategoryFactory.js.map