"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadOrders = void 0;
class DbLoadOrders {
    constructor(loadOrdersRepository) {
        this.loadOrdersRepository = loadOrdersRepository;
    }
    async loadAll() {
        const orders = await this.loadOrdersRepository.loadAll();
        return orders;
    }
}
exports.DbLoadOrders = DbLoadOrders;
//# sourceMappingURL=dbLoadOrders.js.map