"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const errors_1 = require("../errors");
const httpHelper_1 = require("../helpers/http/httpHelper");
class AuthMiddleware {
    constructor(loadAccountByToken, role) {
        this.loadAccountByToken = loadAccountByToken;
        this.role = role;
    }
    async handle(httpRequest) {
        var _a;
        try {
            const accessToken = (_a = httpRequest.headers) === null || _a === void 0 ? void 0 : _a['x-access-token'];
            console.log(accessToken);
            if (accessToken) {
                const account = await this.loadAccountByToken.load(accessToken, this.role);
                if (account) {
                    return (0, httpHelper_1.ok)({ accountId: account.id });
                }
            }
            return (0, httpHelper_1.forbidden)(new errors_1.AccessDeniedError());
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(err);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=authMiddleware.js.map