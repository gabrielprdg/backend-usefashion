"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadopagoServiceWithCreditCard = void 0;
const mercadopago_1 = __importDefault(require("mercadopago"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class MercadopagoServiceWithCreditCard {
    async executewithCreditCard({ transaction_amount, token, description, installments, payment_method_id, email }) {
        console.log('acstoken', process.env.ACCESS_TOKEN);
        mercadopago_1.default.configurations.setAccessToken(`${process.env.ACCESS_TOKEN}`);
        return await mercadopago_1.default.payment
            .save({
            transaction_amount,
            token,
            description,
            installments,
            payment_method_id,
            payer: { email }
        })
            .then(async (data) => {
            const { status, response } = data;
            const { id, transaction_amount, date_approved, card } = response;
            const { first_six_digits, last_four_digits, cardholder } = card;
            return {
                status,
                id,
                transaction_amount,
                date_approved,
                first_six_digits,
                last_four_digits,
                display_name: cardholder.name
            };
        });
    }
}
exports.MercadopagoServiceWithCreditCard = MercadopagoServiceWithCreditCard;
//# sourceMappingURL=creditCardPayment.js.map