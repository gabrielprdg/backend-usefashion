"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddOrder = void 0;
class DbAddOrder {
    constructor(addOrderRepository) {
        this.addOrderRepository = addOrderRepository;
    }
    async add(orderData) {
        await this.addOrderRepository.add(orderData);
    }
}
exports.DbAddOrder = DbAddOrder;
//# sourceMappingURL=dbAddOrder.js.map