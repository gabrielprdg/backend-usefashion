"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCategoryValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddCategoryValidation = () => {
    const validations = [];
    for (const field of ['name']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddCategoryValidation = makeAddCategoryValidation;
//# sourceMappingURL=addCategoryValidationFactory.js.map