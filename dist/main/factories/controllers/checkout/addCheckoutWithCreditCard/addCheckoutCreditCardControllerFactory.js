"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCheckoutCreditCardController = void 0;
const addCheckoutWithCreditCard_1 = require("../../../../../presentation/controllers/checkout/addCheckoutWithCreditCard/addCheckoutWithCreditCard");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const addCheckoutCreditCardValidation_1 = require("./addCheckoutCreditCardValidation");
const makeAddCheckoutCreditCardController = () => {
    const controller = new addCheckoutWithCreditCard_1.AddCheckoutCreditCardController((0, addCheckoutCreditCardValidation_1.makeAddCheckoutCreditCardValidation)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddCheckoutCreditCardController = makeAddCheckoutCreditCardController;
//# sourceMappingURL=addCheckoutCreditCardControllerFactory.js.map