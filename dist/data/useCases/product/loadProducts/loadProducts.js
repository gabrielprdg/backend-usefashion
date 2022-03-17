"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadProducts = void 0;
class DbLoadProducts {
    constructor(loadProdutsRepository) {
        this.loadProductsRepository = loadProdutsRepository;
    }
    async loadAll() {
        const products = await this.loadProductsRepository.loadAll();
        return products;
    }
}
exports.DbLoadProducts = DbLoadProducts;
//# sourceMappingURL=loadProducts.js.map