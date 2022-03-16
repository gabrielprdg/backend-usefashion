"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/usefashionstorelook',
    port: process.env.PORT || 8081,
    jwtSecret: process.env.JWT_SECRET || 'gunfh4430feoj23ddr2rwgwwt2'
};
console.log(process.env.MONGO_URL);
//# sourceMappingURL=env.js.map