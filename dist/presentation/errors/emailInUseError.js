"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInUseError = void 0;
class EmailInUseError extends Error {
    constructor() {
        super('The received email is already in use');
        this.name = 'EmailInUseError';
    }
}
exports.EmailInUseError = EmailInUseError;
//# sourceMappingURL=emailInUseError.js.map