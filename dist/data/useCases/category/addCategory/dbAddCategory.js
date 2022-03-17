"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddCategory = void 0;
class DbAddCategory {
    constructor(addCategoryRepository) {
        this.addCategoryRepository = addCategoryRepository;
    }
    async add(categoryData) {
        await this.addCategoryRepository.add(categoryData);
    }
}
exports.DbAddCategory = DbAddCategory;
//# sourceMappingURL=dbAddCategory.js.map