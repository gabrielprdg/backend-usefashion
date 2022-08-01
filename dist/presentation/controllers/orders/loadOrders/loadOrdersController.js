"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrdersController = void 0;
const errors_1 = require("../../../errors");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class LoadOrdersController {
    constructor(loadOrders) {
        this.loadOrders = loadOrders;
    }
    async handle(httpRequest) {
        try {
            const orders = await this.loadOrders.loadAll();
            return orders.length ? (0, httpHelper_1.ok)(orders) : (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new errors_1.ServerError());
        }
    }
}
exports.LoadOrdersController = LoadOrdersController;
//# sourceMappingURL=loadOrdersController.js.map