"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addShippingValuesControllerFactory_1 = require("../factories/controllers/shipping/addShippingValues/addShippingValuesControllerFactory");
exports.default = (router) => {
    router.post('/shipping', (0, expressRouteAdapter_1.adaptRoute)((0, addShippingValuesControllerFactory_1.makeAddShippingValuesController)()));
};
//# sourceMappingURL=shippingRoutes.js.map