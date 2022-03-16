"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCheckoutTicketController = void 0;
const addCheckoutWIthTicket_1 = require("../../../../../presentation/controllers/checkout/addCheckoutWithTicket/addCheckoutWIthTicket");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const addCheckoutTicketValidation_1 = require("./addCheckoutTicketValidation");
const makeAddCheckoutTicketController = () => {
    const controller = new addCheckoutWIthTicket_1.AddCheckoutTicketController((0, addCheckoutTicketValidation_1.makeAddCheckoutTicketValidation)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddCheckoutTicketController = makeAddCheckoutTicketController;
//# sourceMappingURL=addCheckoutTicketControllerFactory.js.map