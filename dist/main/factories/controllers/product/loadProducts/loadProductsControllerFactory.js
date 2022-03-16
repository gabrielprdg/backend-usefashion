"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProductsController = void 0;
const loadProducts_1 = require("../../../../../presentation/controllers/product/loadProducts/loadProducts");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbLoadProductsFactory_1 = require("../../../useCases/product/loadProducts/dbLoadProductsFactory");
const makeLoadProductsController = () => {
    const controller = new loadProducts_1.LoadProductsController((0, dbLoadProductsFactory_1.makeDbLoadProducts)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadProductsController = makeLoadProductsController;
//# sourceMappingURL=loadProductsControllerFactory.js.map