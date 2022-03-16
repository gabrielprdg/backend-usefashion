"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCategoryController = void 0;
const errors_1 = require("../../../errors");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddCategoryController {
    constructor(addCategory, validation) {
        this.addCategory = addCategory;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            const { name } = httpRequest.body;
            await this.addCategory.add({ name, createdAt: new Date() });
            return (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new errors_1.ServerError());
        }
    }
}
exports.AddCategoryController = AddCategoryController;
//# sourceMappingURL=addCategoryController.js.map