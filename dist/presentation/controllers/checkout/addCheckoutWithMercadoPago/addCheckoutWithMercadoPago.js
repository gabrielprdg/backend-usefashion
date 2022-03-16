"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCheckoutMercadoPagoController = void 0;
const mercadoPagoPayment_1 = require("../../../../infra/checkout/mercadoPagoPayment/mercadoPagoPayment");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddCheckoutMercadoPagoController {
    constructor(validation) {
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            console.log(httpRequest);
            const { preference } = httpRequest.body;
            const Mercadopago = new mercadoPagoPayment_1.MercadopagoService();
            const res = await Mercadopago.executeWithMercadoPago({
                preference
            });
            return (0, httpHelper_1.ok)(res);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.AddCheckoutMercadoPagoController = AddCheckoutMercadoPagoController;
//# sourceMappingURL=addCheckoutWithMercadoPago.js.map