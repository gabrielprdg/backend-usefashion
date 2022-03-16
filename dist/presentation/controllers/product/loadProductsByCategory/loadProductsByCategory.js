"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductsByCategoryController = void 0;
const errors_1 = require("../../../errors");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class LoadProductsByCategoryController {
    constructor(loadProductsByCategory) {
        this.loadProductsByCategory = loadProductsByCategory;
    }
    async handle(httpRequest) {
        try {
            const { category } = httpRequest.params;
            const products = await this.loadProductsByCategory.loadByCategory(category);
            if (products) {
                return (0, httpHelper_1.ok)(products);
            }
            else {
                return (0, httpHelper_1.forbidden)(new errors_1.InvalidParamError('category'));
            }
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new Error());
        }
    }
}
exports.LoadProductsByCategoryController = LoadProductsByCategoryController;
//# sourceMappingURL=loadProductsByCategory.js.map