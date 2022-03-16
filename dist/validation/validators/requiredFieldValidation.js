"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldValidation = void 0;
const errors_1 = require("../../presentation/errors");
// filho do validation composite
class RequiredFieldValidation {
    constructor(fieldName) {
        this.fieldName = fieldName;
    }
    validate(input) {
        if (!input[this.fieldName]) {
            return new errors_1.MissingParamError(this.fieldName);
        }
    }
}
exports.RequiredFieldValidation = RequiredFieldValidation;
//# sourceMappingURL=requiredFieldValidation.js.map