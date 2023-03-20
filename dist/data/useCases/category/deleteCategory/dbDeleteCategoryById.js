"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteCategoryById = void 0;
class DbDeleteCategoryById {
    constructor(deleteCategoryByIdRepository) {
        this.deleteCategoryByIdRepository = deleteCategoryByIdRepository;
    }
    async delete(id) {
        await this.deleteCategoryByIdRepository.deleteById(id);
    }
}
exports.DbDeleteCategoryById = DbDeleteCategoryById;
//# sourceMappingURL=dbDeleteCategoryById.js.map