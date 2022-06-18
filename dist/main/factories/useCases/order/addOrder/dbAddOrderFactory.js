"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddOrder = void 0;
const dbAddOrder_1 = require("../../../../../data/useCases/order/addOrder/dbAddOrder");
const orderMongoRepository_1 = require("../../../../../infra/db/mongoDb/order/orderMongoRepository");
const makeDbAddOrder = () => {
    const orderMongoRepository = new orderMongoRepository_1.OrderMongoRepository();
    return new dbAddOrder_1.DbAddOrder(orderMongoRepository);
};
exports.makeDbAddOrder = makeDbAddOrder;
//# sourceMappingURL=dbAddOrderFactory.js.map