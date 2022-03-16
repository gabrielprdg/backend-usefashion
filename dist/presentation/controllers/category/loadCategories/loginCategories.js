"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCategoriesController = void 0;
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class LoadCategoriesController {
    constructor(loadCategories) {
        this.loadCategories = loadCategories;
    }
    async handle(HttpRequest) {
        try {
            const categories = await this.loadCategories.loadAll();
            return categories.length ? (0, httpHelper_1.ok)(categories) : (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(err);
        }
    }
}
exports.LoadCategoriesController = LoadCategoriesController;
//# sourceMappingURL=loginCategories.js.map