"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addCheckoutTicketControllerFactory_1 = require("../factories/controllers/checkout/addCheckoutWithTicket/addCheckoutTicketControllerFactory");
exports.default = (router) => {
    router.post('/process_payment_ticket', (0, expressRouteAdapter_1.adaptRoute)((0, addCheckoutTicketControllerFactory_1.makeAddCheckoutTicketController)()));
};
//# sourceMappingURL=checkoutTicketRoutes.js.map