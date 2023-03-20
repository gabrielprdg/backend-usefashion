"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCategoryByIdController = void 0;
const deleteCategoryByIdController_1 = require("../../../../../presentation/controllers/category/deleteCategoryById/deleteCategoryByIdController");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbDeleteCategoryById_1 = require("../../../useCases/category/deleteCategoryById/dbDeleteCategoryById");
const makeDeleteCategoryByIdController = () => {
    const controller = new deleteCategoryByIdController_1.DeleteCategoryByIdController((0, dbDeleteCategoryById_1.makeDbDeleteCategoryById)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeDeleteCategoryByIdController = makeDeleteCategoryByIdController;
//# sourceMappingURL=deleteCategoryByIdControllerFactory.js.map