"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadProducts = void 0;
const loadProducts_1 = require("../../../../../data/useCases/product/loadProducts/loadProducts");
const productMongoRepository_1 = require("../../../../../infra/db/mongoDb/product/productMongoRepository");
const makeDbLoadProducts = () => {
    const productMongoRepository = new productMongoRepository_1.ProductMongoRepository();
    return new loadProducts_1.DbLoadProducts(productMongoRepository);
};
exports.makeDbLoadProducts = makeDbLoadProducts;
//# sourceMappingURL=dbLoadProductsFactory.js.map