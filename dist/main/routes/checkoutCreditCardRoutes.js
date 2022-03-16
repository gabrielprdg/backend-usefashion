"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addCheckoutCreditCardControllerFactory_1 = require("../factories/controllers/checkout/addCheckoutWithCreditCard/addCheckoutCreditCardControllerFactory");
exports.default = (router) => {
    router.post('/process_payment', (0, expressRouteAdapter_1.adaptRoute)((0, addCheckoutCreditCardControllerFactory_1.makeAddCheckoutCreditCardController)()));
};
//# sourceMappingURL=checkoutCreditCardRoutes.js.map