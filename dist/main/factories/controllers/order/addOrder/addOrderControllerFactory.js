"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddOrderController = void 0;
const addOrderController_1 = require("../../../../../presentation/controllers/orders/addOrder/addOrderController");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbAddOrderFactory_1 = require("../../../useCases/order/addOrder/dbAddOrderFactory");
const addOrderValidationFactory_1 = require("./addOrderValidationFactory");
const makeAddOrderController = () => {
    const controller = new addOrderController_1.AddOrderController((0, dbAddOrderFactory_1.makeDbAddOrder)(), (0, addOrderValidationFactory_1.makeAddOrderValidation)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddOrderController = makeAddOrderController;
//# sourceMappingURL=addOrderControllerFactory.js.map