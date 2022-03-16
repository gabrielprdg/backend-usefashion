"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCheckoutMercadoPagoValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddCheckoutMercadoPagoValidation = () => {
    const validations = [];
    for (const field of ['preference']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddCheckoutMercadoPagoValidation = makeAddCheckoutMercadoPagoValidation;
//# sourceMappingURL=addCheckoutMercadoPagoValidation.js.map