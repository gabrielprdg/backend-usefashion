"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadProductById = void 0;
const dbLoadProductById_1 = require("../../../../../data/useCases/product/loadProductById/dbLoadProductById");
const productMongoRepository_1 = require("../../../../../infra/db/mongoDb/product/productMongoRepository");
const makeDbLoadProductById = () => {
    const productMongoRepository = new productMongoRepository_1.ProductMongoRepository();
    return new dbLoadProductById_1.DbLoadProductById(productMongoRepository);
};
exports.makeDbLoadProductById = makeDbLoadProductById;
//# sourceMappingURL=dbLoadProductByIdFactory.js.map