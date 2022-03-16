"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddCategoryController = void 0;
const addCategoryController_1 = require("../../../../../presentation/controllers/category/addCategory/addCategoryController");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbAddCategoryFactory_1 = require("../../../useCases/category/addCategory/dbAddCategoryFactory");
const addCategoryValidationFactory_1 = require("./addCategoryValidationFactory");
const makeAddCategoryController = () => {
    const controller = new addCategoryController_1.AddCategoryController((0, dbAddCategoryFactory_1.makeDbAddCategory)(), (0, addCategoryValidationFactory_1.makeAddCategoryValidation)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeAddCategoryController = makeAddCategoryController;
//# sourceMappingURL=addCategoryControllerFactory.js.map