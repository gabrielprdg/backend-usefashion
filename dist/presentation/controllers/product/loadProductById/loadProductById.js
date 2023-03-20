"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadProductByIdController = void 0;
const httpHelper_1 = require("../../../helpers/http/httpHelper");
const errors_1 = require("../../../errors");
class LoadProductByIdController {
    constructor(loadProductById) {
        this.loadProductById = loadProductById;
    }
    async handle(httpRequest) {
        try {
            const { id } = httpRequest.params;
            const product = await this.loadProductById.loadById(id);
            if (product) {
                return (0, httpHelper_1.ok)(product);
            }
            else {
                return (0, httpHelper_1.forbidden)(new errors_1.InvalidParamError('productId'));
            }
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new Error());
        }
    }
}
exports.LoadProductByIdController = LoadProductByIdController;
//# sourceMappingURL=loadProductById.js.map