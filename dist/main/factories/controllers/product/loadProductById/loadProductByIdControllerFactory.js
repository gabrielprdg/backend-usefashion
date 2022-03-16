"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProductByIdController = void 0;
const loadProductById_1 = require("../../../../../presentation/controllers/product/loadProductById/loadProductById");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbLoadProductByIdFactory_1 = require("../../../useCases/product/loadProductById/dbLoadProductByIdFactory");
const makeLoadProductByIdController = () => {
    const controller = new loadProductById_1.LoadProductByIdController((0, dbLoadProductByIdFactory_1.makeDbLoadProductById)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadProductByIdController = makeLoadProductByIdController;
//# sourceMappingURL=loadProductByIdControllerFactory.js.map