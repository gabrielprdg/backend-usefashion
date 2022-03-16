"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProductsByCategoryController = void 0;
const loadProductsByCategory_1 = require("../../../../../presentation/controllers/product/loadProductsByCategory/loadProductsByCategory");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbLoadProductssByCategoryFactory_1 = require("../../../useCases/product/loadProductsByCategory/dbLoadProductssByCategoryFactory");
const makeLoadProductsByCategoryController = () => {
    const controller = new loadProductsByCategory_1.LoadProductsByCategoryController((0, dbLoadProductssByCategoryFactory_1.makeDbLoadProductsByCategory)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadProductsByCategoryController = makeLoadProductsByCategoryController;
//# sourceMappingURL=loadProductsByCategoryControllerFactory.js.map