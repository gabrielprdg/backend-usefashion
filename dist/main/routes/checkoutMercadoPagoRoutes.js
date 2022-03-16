"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addCheckoutMercadoPagoControllerFactory_1 = require("../factories/controllers/checkout/addCheckoutWithMercadoPago/addCheckoutMercadoPagoControllerFactory");
exports.default = (router) => {
    router.post('/process_payment_mp', (0, expressRouteAdapter_1.adaptRoute)((0, addCheckoutMercadoPagoControllerFactory_1.makeAddCheckoutMercadoPagoController)()));
};
//# sourceMappingURL=checkoutMercadoPagoRoutes.js.map