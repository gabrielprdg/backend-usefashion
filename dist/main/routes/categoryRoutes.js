"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addCategoryControllerFactory_1 = require("../factories/controllers/category/addCategory/addCategoryControllerFactory");
const deleteCategoryByIdControllerFactory_1 = require("../factories/controllers/category/deleteCategoryById/deleteCategoryByIdControllerFactory");
const addCategoriesControllerFactory_1 = require("../factories/controllers/category/loadCategories/addCategoriesControllerFactory");
const adminAuth_1 = require("../factories/middlewares/adminAuth");
exports.default = (router) => {
    router.post('/categories', adminAuth_1.adminAuth, (0, expressRouteAdapter_1.adaptRoute)((0, addCategoryControllerFactory_1.makeAddCategoryController)()));
    router.get('/categories', (0, expressRouteAdapter_1.adaptRoute)((0, addCategoriesControllerFactory_1.makeLoadCategoriesController)()));
    router.delete('/categories/:categoryId', (0, expressRouteAdapter_1.adaptRoute)((0, deleteCategoryByIdControllerFactory_1.makeDeleteCategoryByIdController)()));
};
//# sourceMappingURL=categoryRoutes.js.map