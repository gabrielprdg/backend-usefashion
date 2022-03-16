"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.created = exports.noContent = exports.ok = exports.serverError = exports.unauthorized = exports.forbidden = exports.badRequest = void 0;
const serverError_1 = require("../../errors/serverError");
const unauthorizedError_1 = require("../../errors/unauthorizedError");
const badRequest = (error) => ({
    statusCode: 400,
    body: error
});
exports.badRequest = badRequest;
const forbidden = (error) => ({
    statusCode: 403,
    body: error
});
exports.forbidden = forbidden;
const unauthorized = () => ({
    statusCode: 401,
    body: new unauthorizedError_1.UnauthorizedError()
});
exports.unauthorized = unauthorized;
const serverError = (error) => ({
    statusCode: 500,
    body: new serverError_1.ServerError(error.stack)
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
const created = (data) => ({
    statusCode: 201,
    body: data
});
exports.created = created;
//# sourceMappingURL=httpHelper.js.map