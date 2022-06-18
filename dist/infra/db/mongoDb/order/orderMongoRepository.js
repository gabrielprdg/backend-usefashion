"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
class OrderMongoRepository {
    async add(orderData) {
        const orderCollection = await mongoHelper_1.mongoHelper.getCollection('orders');
        await orderCollection.insertOne(orderData);
    }
}
exports.OrderMongoRepository = OrderMongoRepository;
//# sourceMappingURL=orderMongoRepository.js.map