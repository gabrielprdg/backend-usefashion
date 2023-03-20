"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const httpHelper_1 = require("../../helpers/http/httpHelper");
class LoginController {
    constructor(authentication, validation) {
        this.authentication = authentication;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            const { email, password } = httpRequest.body;
            const { accessToken, user } = await this.authentication.auth({
                email, password
            });
            if (!accessToken) {
                return (0, httpHelper_1.unauthorized)();
            }
            return (0, httpHelper_1.ok)({ accessToken, user });
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(err);
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=loginController.js.map