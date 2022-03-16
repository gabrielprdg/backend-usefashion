"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddProduct = void 0;
const dbAddProduct_1 = require("../../../../../data/useCases/product/addProduct/dbAddProduct");
const productMongoRepository_1 = require("../../../../../infra/db/mongoDb/product/productMongoRepository");
const makeDbAddProduct = () => {
    const productMongoRepository = new productMongoRepository_1.ProductMongoRepository();
    return new dbAddProduct_1.DbAddProduct(productMongoRepository);
};
exports.makeDbAddProduct = makeDbAddProduct;
//# sourceMappingURL=dbAddProductFactory.js.map