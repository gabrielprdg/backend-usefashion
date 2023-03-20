"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryByIdController = void 0;
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class DeleteCategoryByIdController {
    constructor(deleteCategoryById) {
        this.deleteCategoryById = deleteCategoryById;
    }
    async handle(httpRequest) {
        const { categoryId } = httpRequest.params;
        await this.deleteCategoryById.delete(categoryId);
        return (0, httpHelper_1.noContent)();
    }
}
exports.DeleteCategoryByIdController = DeleteCategoryByIdController;
//# sourceMappingURL=deleteCategoryByIdController.js.map