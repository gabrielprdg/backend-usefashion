"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationComposite = void 0;
class ValidationComposite {
    // irá ser feita todas as validações a partir desse componente
    constructor(validations) {
        this.validations = validations;
    }
    validate(input) {
        for (const validation of this.validations) {
            const err = validation.validate(input);
            if (err) {
                return err;
            }
        }
    }
}
exports.ValidationComposite = ValidationComposite;
//# sourceMappingURL=validationComposite.js.map