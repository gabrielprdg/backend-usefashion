"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addOrderControllerFactory_1 = require("../factories/controllers/order/addOrder/addOrderControllerFactory");
const logControllerDecoratorFactory_1 = require("../factories/decorators/logControllerDecoratorFactory");
exports.default = (router) => {
    router.post('/order', (0, expressRouteAdapter_1.adaptRoute)((0, logControllerDecoratorFactory_1.makeLogControllerDecorator)((0, addOrderControllerFactory_1.makeAddOrderController)())));
};
//# sourceMappingURL=orderRoutes.js.map