"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = void 0;
const expressMiddlewareAdapter_1 = require("../../../main/adapters/expressMiddlewareAdapter");
const authMiddlewareFactory_1 = require("./authMiddlewareFactory");
exports.adminAuth = (0, expressMiddlewareAdapter_1.adaptMiddleware)((0, authMiddlewareFactory_1.makeAuthMiddleware)('admin'));
//# sourceMappingURL=adminAuth.js.map