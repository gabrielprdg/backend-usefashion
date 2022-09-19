"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteProductById = void 0;
const dbDeleteProductById_1 = require("../../../../../data/useCases/product/deleteProductById/dbDeleteProductById");
const productMongoRepository_1 = require("../../../../../infra/db/mongoDb/product/productMongoRepository");
const makeDbDeleteProductById = () => {
    const productMongoRepository = new productMongoRepository_1.ProductMongoRepository();
    return new dbDeleteProductById_1.DbDeleteProductById(productMongoRepository);
};
exports.makeDbDeleteProductById = makeDbDeleteProductById;
//# sourceMappingURL=dbDeleteProductById.js.map