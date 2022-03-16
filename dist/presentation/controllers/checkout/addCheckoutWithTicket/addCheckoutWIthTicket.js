"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCheckoutTicketController = void 0;
const ticketPayment_1 = require("../../../../infra/checkout/ticketPayment/ticketPayment");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddCheckoutTicketController {
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
            const { transaction_amount, description, payment_method_id, payer } = httpRequest.body;
            const Mercadopago = new ticketPayment_1.MercadopagoServiceWithTicktet();
            const res = await Mercadopago.executeWithTicket({
                transaction_amount,
                description,
                payment_method_id,
                payer
            });
            return (0, httpHelper_1.ok)(res);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.AddCheckoutTicketController = AddCheckoutTicketController;
//# sourceMappingURL=addCheckoutWIthTicket.js.map