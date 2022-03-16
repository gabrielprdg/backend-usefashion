"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMongoRepository = void 0;
const mongoHelper_1 = require("../helper/mongoHelper");
class AccountMongoRepository {
    async add(accountData) {
        const accountCollection = await mongoHelper_1.mongoHelper.getCollection('accounts');
        const result = await accountCollection.insertOne(accountData);
        const accountD = result.ops[0];
        return mongoHelper_1.mongoHelper.map(accountD);
    }
    async loadByEmail(email) {
        const accountCollection = await mongoHelper_1.mongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne({ email });
        if (account) {
            return mongoHelper_1.mongoHelper.map(account);
        }
    }
    async updateAccessToken(id, token) {
        const accountCollection = await mongoHelper_1.mongoHelper.getCollection('accounts');
        await accountCollection.updateOne({
            _id: id
        }, {
            $set: {
                accessToken: token
            }
        });
    }
    async loadByToken(token, role) {
        const accountCollection = await mongoHelper_1.mongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne({
            accessToken: token,
            $or: [{
                    role
                }, {
                    role: 'admin'
                }]
        });
        if (account) {
            return mongoHelper_1.mongoHelper.map(account);
        }
    }
}
exports.AccountMongoRepository = AccountMongoRepository;
//# sourceMappingURL=accountMongoRepository.js.map