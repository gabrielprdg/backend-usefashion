"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const authMiddleware_1 = require("../../../presentation/middlewares/authMiddleware");
const dbLoadAccountByTokenFactory_1 = require("../../../main/factories/useCases/account/loadAccountByToken/dbLoadAccountByTokenFactory");
const makeAuthMiddleware = (role) => {
    return new authMiddleware_1.AuthMiddleware((0, dbLoadAccountByTokenFactory_1.makeDbLoadAccountByToken)(), role);
};
exports.makeAuthMiddleware = makeAuthMiddleware;
//# sourceMappingURL=authMiddlewareFactory.js.map