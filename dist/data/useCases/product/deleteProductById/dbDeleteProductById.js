"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteProductById = void 0;
class DbDeleteProductById {
    constructor(deleteProductByIdRepository) {
        this.deleteProductByIdRepository = deleteProductByIdRepository;
    }
    async delete(id) {
        await this.deleteProductByIdRepository.deleteById(id);
    }
}
exports.DbDeleteProductById = DbDeleteProductById;
//# sourceMappingURL=dbDeleteProductById.js.map