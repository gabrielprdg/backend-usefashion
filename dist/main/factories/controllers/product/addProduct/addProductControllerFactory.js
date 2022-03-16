"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddProductController = void 0;
const addProductController_1 = require("../../../../../presentation/controllers/product/addProduct/addProductController");
const logControllerDecoratorFactory_1 = require("../../../../factories/decorators/logControllerDecoratorFactory");
const dbAddProductFactory_1 = require("../../../../factories/useCases/product/addProduct/dbAddProductFactory");
const addProductValidationFactory_1 = require("./addProductValidationFactory");
const makeAddProductController = () => {
    const controller = new addProductController_1.AddProductController((0, dbAddProductFactory_1.makeDbAddProduct)(), (0, addProductValidationFactory_1.makeAddProductValidation)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddProductController = makeAddProductController;
//# sourceMappingURL=addProductControllerFactory.js.map