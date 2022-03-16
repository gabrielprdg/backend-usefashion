"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
class LogMongoRepository {
    async logError(stack) {
        const errorCollection = await mongoHelper_1.mongoHelper.getCollection('errors');
        await errorCollection.insertOne({
            stack,
            date: Date.now()
        });
    }
}
exports.LogMongoRepository = LogMongoRepository;
//# sourceMappingURL=logMongoRepository.js.map