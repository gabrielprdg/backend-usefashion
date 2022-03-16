"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCheckoutTicketValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddCheckoutTicketValidation = () => {
    const validations = [];
    for (const field of ['payment_method_id', 'transaction_amount', 'description']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddCheckoutTicketValidation = makeAddCheckoutTicketValidation;
//# sourceMappingURL=addCheckoutTicketValidation.js.map