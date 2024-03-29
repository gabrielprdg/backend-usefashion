"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrderController = void 0;
const errors_1 = require("../../../errors");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddOrderController {
    constructor(addOrder) {
        this.addOrder = addOrder;
    }
    async handle(httpRequest) {
        try {
            const { user, product } = httpRequest.body;
            await this.addOrder.add({ user, product });
            return (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new errors_1.ServerError());
        }
    }
}
exports.AddOrderController = AddOrderController;
//# sourceMappingURL=addOrderController.js.map