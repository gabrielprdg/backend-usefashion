"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadProductById = void 0;
class DbLoadProductById {
    constructor(loadProductByIdRepository) {
        this.loadProductByIdRepository = loadProductByIdRepository;
    }
    async loadById(id) {
        const product = await this.loadProductByIdRepository.loadById(id);
        return product;
    }
}
exports.DbLoadProductById = DbLoadProductById;
//# sourceMappingURL=dbLoadProductById.js.map