"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCategories = void 0;
class DbLoadCategories {
    constructor(loadCategoryRepository) {
        this.loadCategoriesRepository = loadCategoryRepository;
    }
    async loadAll() {
        const categories = await this.loadCategoriesRepository.loadAll();
        return categories;
    }
}
exports.DbLoadCategories = DbLoadCategories;
//# sourceMappingURL=dbLoadCategories.js.map