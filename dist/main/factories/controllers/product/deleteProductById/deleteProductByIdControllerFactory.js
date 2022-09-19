"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteProductByIdController = void 0;
const deleteProductByIdController_1 = require("../../../../../presentation/controllers/product/deleteProductById/deleteProductByIdController");
const logControllerDecoratorFactory_1 = require("../../../../factories/decorators/logControllerDecoratorFactory");
const dbDeleteProductById_1 = require("../../../useCases/product/deleteProductById/dbDeleteProductById");
const makeDeleteProductByIdController = () => {
    const controller = new deleteProductByIdController_1.DeleteProductByIdController((0, dbDeleteProductById_1.makeDbDeleteProductById)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeDeleteProductByIdController = makeDeleteProductByIdController;
//# sourceMappingURL=deleteProductByIdControllerFactory.js.map