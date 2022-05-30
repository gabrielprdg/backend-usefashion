"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddShippingValuesController = void 0;
const addShippingValuesController_1 = require("../../../../../presentation/controllers/shipping/addShippingValues/addShippingValuesController");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const makeAddShippingValuesController = () => {
    const controller = new addShippingValuesController_1.AddShippingValuesController();
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddShippingValuesController = makeAddShippingValuesController;
//# sourceMappingURL=addShippingValuesControllerFactory.js.map