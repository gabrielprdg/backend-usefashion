"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const signUpControllerFactory_1 = require("../factories/controllers/login/signUp/signUpControllerFactory");
const loginControllerFactory_1 = require("../factories/controllers/login/login/loginControllerFactory");
const logControllerDecoratorFactory_1 = require("../factories/decorators/logControllerDecoratorFactory");
exports.default = (router) => {
    router.post('/signup', (0, expressRouteAdapter_1.adaptRoute)((0, logControllerDecoratorFactory_1.makeLogControllerDecorator)((0, signUpControllerFactory_1.makeSignUpController)())));
    router.post('/login', (0, expressRouteAdapter_1.adaptRoute)((0, logControllerDecoratorFactory_1.makeLogControllerDecorator)((0, loginControllerFactory_1.makeLoginController)())));
};
//# sourceMappingURL=loginRoutes.js.map