"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const expressMiddlewareAdapter_1 = require("../../../main/adapters/expressMiddlewareAdapter");
const authMiddlewareFactory_1 = require("./authMiddlewareFactory");
exports.auth = (0, expressMiddlewareAdapter_1.adaptMiddleware)((0, authMiddlewareFactory_1.makeAuthMiddleware)());
//# sourceMappingURL=auth.js.map