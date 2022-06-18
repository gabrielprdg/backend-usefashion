"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCheckoutCreditCardController = void 0;
const mercadopago_1 = __importDefault(require("mercadopago"));
const creditCardPayment_1 = require("../../../../infra/checkout/creditCardPayment/creditCardPayment");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddCheckoutCreditCardController {
    constructor(validation) {
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            mercadopago_1.default.configurations.setAccessToken(`${process.env.ACCESS_TOKEN}`);
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            console.log(httpRequest);
            console.log('AT', process.env.ACCESS_TOKEN);
            console.log('ci', process.env.CLIENT_ID);
            const { token, payment_method_id, transaction_amount, description, installments, email } = httpRequest.body;
            const Mercadopago = new creditCardPayment_1.MercadopagoServiceWithCreditCard();
            const res = await Mercadopago.executewithCreditCard({
                token,
                payment_method_id,
                transaction_amount,
                description,
                installments,
                email
            });
            console.log('3', res);
            return (0, httpHelper_1.ok)(res);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.AddCheckoutCreditCardController = AddCheckoutCreditCardController;
//# sourceMappingURL=addCheckoutWithCreditCard.js.map