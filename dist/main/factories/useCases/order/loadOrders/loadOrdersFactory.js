"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadOrders = void 0;
const dbLoadOrders_1 = require("../../../../../data/useCases/order/loadOrders/dbLoadOrders");
const orderMongoRepository_1 = require("../../../../../infra/db/mongoDb/order/orderMongoRepository");
const makeDbLoadOrders = () => {
    const orderMongoRepository = new orderMongoRepository_1.OrderMongoRepository();
    return new dbLoadOrders_1.DbLoadOrders(orderMongoRepository);
};
exports.makeDbLoadOrders = makeDbLoadOrders;
//# sourceMappingURL=loadOrdersFactory.js.map