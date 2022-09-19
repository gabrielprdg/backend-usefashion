"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductByIdController = void 0;
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class DeleteProductByIdController {
    constructor(deleteProductById) {
        this.deleteProductById = deleteProductById;
    }
    async handle(httpRequest) {
        try {
            const { productId } = httpRequest.params;
            await this.deleteProductById.delete(productId);
            return (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new Error());
        }
    }
}
exports.DeleteProductByIdController = DeleteProductByIdController;
//# sourceMappingURL=deleteProductByIdController.js.map