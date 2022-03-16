"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCheckoutCreditCardValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddCheckoutCreditCardValidation = () => {
    const validations = [];
    for (const field of ['token', 'payment_method_id', 'transaction_amount', 'description', 'installments', 'email']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddCheckoutCreditCardValidation = makeAddCheckoutCreditCardValidation;
//# sourceMappingURL=addCheckoutCreditCardValidation.js.map