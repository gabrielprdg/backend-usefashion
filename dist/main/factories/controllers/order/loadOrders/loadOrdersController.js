"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadOrdersController = void 0;
const loadOrdersController_1 = require("../../../../../presentation/controllers/orders/loadOrders/loadOrdersController");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const loadOrdersFactory_1 = require("../../../useCases/order/loadOrders/loadOrdersFactory");
const makeLoadOrdersController = () => {
    const controller = new loadOrdersController_1.LoadOrdersController((0, loadOrdersFactory_1.makeDbLoadOrders)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadOrdersController = makeLoadOrdersController;
//# sourceMappingURL=loadOrdersController.js.map