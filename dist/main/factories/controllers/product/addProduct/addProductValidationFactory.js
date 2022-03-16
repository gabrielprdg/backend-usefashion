"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddProductValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddProductValidation = () => {
    const validations = [];
    for (const field of ['name', 'description', 'category', 'price', 'productSize']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddProductValidation = makeAddProductValidation;
//# sourceMappingURL=addProductValidationFactory.js.map