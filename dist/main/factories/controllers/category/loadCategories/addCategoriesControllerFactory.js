"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCategoriesController = void 0;
const loginCategories_1 = require("../../../../../presentation/controllers/category/loadCategories/loginCategories");
const logControllerDecoratorFactory_1 = require("../../../decorators/logControllerDecoratorFactory");
const dbLoadCategoriesFactory_1 = require("../../../useCases/category/loadCategories/dbLoadCategoriesFactory");
const makeLoadCategoriesController = () => {
    const controller = new loginCategories_1.LoadCategoriesController((0, dbLoadCategoriesFactory_1.makeDbLoadCategories)());
    return (0, logControllerDecoratorFactory_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadCategoriesController = makeLoadCategoriesController;
//# sourceMappingURL=addCategoriesControllerFactory.js.map