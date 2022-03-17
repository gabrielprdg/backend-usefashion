"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadProductsByCategory = void 0;
class DbLoadProductsByCategory {
    constructor(loadProductByCategoryRepository) {
        this.loadProductsByCategoryRepository = loadProductByCategoryRepository;
    }
    async loadByCategory(category) {
        const products = await this.loadProductsByCategoryRepository.loadByCategory(category);
        return products;
    }
}
exports.DbLoadProductsByCategory = DbLoadProductsByCategory;
//# sourceMappingURL=dbLoadProductByCategory.js.map