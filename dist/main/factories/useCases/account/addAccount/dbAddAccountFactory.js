"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddAccount = void 0;
const dbAddAccount_1 = require("../../../../../data/useCases/account/addAccount/dbAddAccount");
const bcryptAdapter_1 = require("../../../../../infra/criptography/bcryptAdapter/bcryptAdapter");
const accountMongoRepository_1 = require("../../../../../infra/db/mongoDb/account/accountMongoRepository");
const makeAddAccount = () => {
    const salt = 12;
    const bcryptAdapter = new bcryptAdapter_1.BcryptAdapter(salt);
    const accountMongoRepo = new accountMongoRepository_1.AccountMongoRepository();
    return new dbAddAccount_1.DbAddAccount(bcryptAdapter, accountMongoRepo, accountMongoRepo);
};
exports.makeAddAccount = makeAddAccount;
//# sourceMappingURL=dbAddAccountFactory.js.map