"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const emailValidatorAdapter_1 = require("../../../../../infra/validators/emailValidatorAdapter");
const makeSignUpValidation = () => {
    const validations = [];
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    validations.push(new validators_1.CompareFieldsValidation('password', 'passwordConfirmation'));
    validations.push(new validators_1.EmailValidation(new emailValidatorAdapter_1.EmailValidatorAdapter(), 'email'));
    return new validators_1.ValidationComposite(validations);
};
exports.makeSignUpValidation = makeSignUpValidation;
//# sourceMappingURL=signUpValidationFactory.js.map