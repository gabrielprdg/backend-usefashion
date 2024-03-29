"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
class OrderMongoRepository {
    async add(orderData) {
        const orderCollection = await mongoHelper_1.mongoHelper.getCollection('orders');
        await orderCollection.insertOne(orderData);
    }
    async loadAll() {
        const orderCollection = await mongoHelper_1.mongoHelper.getCollection('orders');
        const orders = await orderCollection.find().toArray();
        return mongoHelper_1.mongoHelper.mapCollection(orders); // helper que mapea os objetos facilitando a leitura de dados
    }
}
exports.OrderMongoRepository = OrderMongoRepository;
//# sourceMappingURL=orderMongoRepository.js.map