"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductsController = void 0;
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class LoadProductsController {
    constructor(loadProducts) {
        this.loadProducts = loadProducts;
    }
    async handle(httpRequest) {
        try {
            const products = await this.loadProducts.loadAll();
            return products.length ? (0, httpHelper_1.ok)(products) : (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(err);
        }
    }
}
exports.LoadProductsController = LoadProductsController;
//# sourceMappingURL=loadProducts.js.map