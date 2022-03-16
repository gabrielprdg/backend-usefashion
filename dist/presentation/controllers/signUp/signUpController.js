"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const emailInUseError_1 = require("../../errors/emailInUseError");
const serverError_1 = require("../../errors/serverError");
const httpHelper_1 = require("../../helpers/http/httpHelper");
class SignUpController {
    constructor(addAccount, validation, authentication) {
        this.addAccount = addAccount;
        this.validation = validation;
        this.authentication = authentication;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            const { name, email, password } = httpRequest.body;
            const account = await this.addAccount.add({ name, email, password });
            if (!account) {
                return (0, httpHelper_1.forbidden)(new emailInUseError_1.EmailInUseError());
            }
            const { accessToken, user } = await this.authentication.auth({ email, password });
            console.log('oi', user);
            return (0, httpHelper_1.ok)({ accessToken, user });
        }
        catch (error) {
            return (0, httpHelper_1.serverError)(new serverError_1.ServerError());
        }
    }
}
exports.SignUpController = SignUpController;
//# sourceMappingURL=signUpController.js.map