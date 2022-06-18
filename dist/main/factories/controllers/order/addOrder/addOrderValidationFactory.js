"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddOrderValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddOrderValidation = () => {
    const validations = [];
    for (const field of ['user', 'product', 'address', 'status', 'shippingType']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddOrderValidation = makeAddOrderValidation;
//# sourceMappingURL=addOrderValidationFactory.js.map