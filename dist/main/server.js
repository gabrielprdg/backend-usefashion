"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoHelper_1 = require("../infra/db/mongoDb/helper/mongoHelper");
const env_1 = __importDefault(require("./config/env"));
mongoHelper_1.mongoHelper.connect(env_1.default.mongoUrl)
    .then(async () => {
    const app = (await Promise.resolve().then(() => __importStar(require('./config/app')))).default;
    app.listen(env_1.default.port, () => {
        console.log(`Server Running at port ${env_1.default.port}!`);
    });
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=server.js.map