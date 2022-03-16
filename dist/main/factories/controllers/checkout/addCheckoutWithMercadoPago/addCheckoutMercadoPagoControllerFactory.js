"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCheckoutMercadoPagoController = void 0;
const addCheckoutWithMercadoPago_1 = require("../../../../../presentation/controllers/checkout/addCheckoutWithMercadoPago/addCheckoutWithMercadoPago");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const addCheckoutMercadoPagoValidation_1 = require("./addCheckoutMercadoPagoValidation");
const makeAddCheckoutMercadoPagoController = () => {
    const controller = new addCheckoutWithMercadoPago_1.AddCheckoutMercadoPagoController((0, addCheckoutMercadoPagoValidation_1.makeAddCheckoutMercadoPagoValidation)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddCheckoutMercadoPagoController = makeAddCheckoutMercadoPagoController;
//# sourceMappingURL=addCheckoutMercadoPagoControllerFactory.js.map