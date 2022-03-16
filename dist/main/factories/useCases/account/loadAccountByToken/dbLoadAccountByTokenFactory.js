"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadAccountByToken = void 0;
const dbLoadAccountByToken_1 = require("../../../../../data/useCases/account/loadAccountByToken/dbLoadAccountByToken");
const jwtAdapter_1 = require("../../../../../infra/criptography/jwtAdapter/jwtAdapter");
const accountMongoRepository_1 = require("../../../../../infra/db/mongoDb/account/accountMongoRepository");
const env_1 = __importDefault(require("../../../../config/env"));
const makeDbLoadAccountByToken = () => {
    const jwtAdapter = new jwtAdapter_1.JwtAdapter(env_1.default.jwtSecret);
    const accountMongoRepository = new accountMongoRepository_1.AccountMongoRepository();
    return new dbLoadAccountByToken_1.DbLoadAccountByToken(jwtAdapter, accountMongoRepository);
};
exports.makeDbLoadAccountByToken = makeDbLoadAccountByToken;
//# sourceMappingURL=dbLoadAccountByTokenFactory.js.map