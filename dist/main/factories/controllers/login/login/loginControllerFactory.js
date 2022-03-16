"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginController = void 0;
const loginController_1 = require("../../../../../presentation/controllers/login/loginController");
const loginValidationFactory_1 = require("./loginValidationFactory");
const dbAuthenticationFactory_1 = require("../../../useCases/account/authentication/dbAuthenticationFactory");
const makeLoginController = () => {
    return new loginController_1.LoginController((0, dbAuthenticationFactory_1.makeDbAuthentication)(), (0, loginValidationFactory_1.makeLoginValidation)());
};
exports.makeLoginController = makeLoginController;
//# sourceMappingURL=loginControllerFactory.js.map