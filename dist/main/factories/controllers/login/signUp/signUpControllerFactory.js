"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpController = void 0;
const signUpController_1 = require("../../../../../presentation/controllers/signUp/signUpController");
const dbAddAccountFactory_1 = require("../../../useCases/account/addAccount/dbAddAccountFactory");
const dbAuthenticationFactory_1 = require("../../../useCases/account/authentication/dbAuthenticationFactory");
const signUpValidationFactory_1 = require("./signUpValidationFactory");
const makeSignUpController = () => {
    return new signUpController_1.SignUpController((0, dbAddAccountFactory_1.makeAddAccount)(), (0, signUpValidationFactory_1.makeSignUpValidation)(), (0, dbAuthenticationFactory_1.makeDbAuthentication)());
};
exports.makeSignUpController = makeSignUpController;
//# sourceMappingURL=signUpControllerFactory.js.map