"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrderController = void 0;
const errors_1 = require("../../../errors");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddOrderController {
    constructor(addOrder, validation) {
        this.validation = validation;
        this.addOrder = addOrder;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            const { user, product, status } = httpRequest.body;
            await this.addOrder.add({ user, product, status });
            return (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new errors_1.ServerError());
        }
    }
}
exports.AddOrderController = AddOrderController;
//# sourceMappingURL=addOrderController.js.map