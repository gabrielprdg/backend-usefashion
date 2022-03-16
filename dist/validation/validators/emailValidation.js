"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidation = void 0;
const errors_1 = require("../../presentation/errors");
// filho do validation composite
class EmailValidation {
    constructor(emailValidator, fieldName) {
        this.fieldName = fieldName;
        this.emailValidator = emailValidator;
    }
    validate(input) {
        const isValid = this.emailValidator.isValid(input[this.fieldName]);
        if (!isValid) {
            return new errors_1.InvalidParamError(this.fieldName);
        }
    }
}
exports.EmailValidation = EmailValidation;
//# sourceMappingURL=emailValidation.js.map