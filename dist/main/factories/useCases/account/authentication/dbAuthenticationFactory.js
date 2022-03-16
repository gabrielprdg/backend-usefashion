"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAuthentication = void 0;
const dbAuthentication_1 = require("../../../../../data/useCases/account/authentication/dbAuthentication");
const bcryptAdapter_1 = require("../../../../../infra/criptography/bcryptAdapter/bcryptAdapter");
const jwtAdapter_1 = require("../../../../../infra/criptography/jwtAdapter/jwtAdapter");
const accountMongoRepository_1 = require("../../../../../infra/db/mongoDb/account/accountMongoRepository");
const env_1 = __importDefault(require("../../../../config/env"));
const makeDbAuthentication = () => {
    const salt = 12;
    const bcryptAdapter = new bcryptAdapter_1.BcryptAdapter(salt);
    const jwtAdapter = new jwtAdapter_1.JwtAdapter(env_1.default.jwtSecret);
    const accountMongoRepository = new accountMongoRepository_1.AccountMongoRepository();
    return new dbAuthentication_1.DbAthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository);
};
exports.makeDbAuthentication = makeDbAuthentication;
//# sourceMappingURL=dbAuthenticationFactory.js.map