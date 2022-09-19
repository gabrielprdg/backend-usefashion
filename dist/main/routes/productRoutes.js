"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../adapters/expressRouteAdapter");
const addProductControllerFactory_1 = require("../factories/controllers/product/addProduct/addProductControllerFactory");
const loadProductByIdControllerFactory_1 = require("../factories/controllers/product/loadProductById/loadProductByIdControllerFactory");
const loadProductsControllerFactory_1 = require("../factories/controllers/product/loadProducts/loadProductsControllerFactory");
const loadProductsByCategoryControllerFactory_1 = require("../factories/controllers/product/loadProductsByCategory/loadProductsByCategoryControllerFactory");
const adminAuth_1 = require("../factories/middlewares/adminAuth");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../config/multer"));
const deleteProductByIdControllerFactory_1 = require("../factories/controllers/product/deleteProductById/deleteProductByIdControllerFactory");
exports.default = (router) => {
    router.post('/products', adminAuth_1.adminAuth, (0, multer_1.default)(multer_2.default).array('files', 5), (0, expressRouteAdapter_1.adaptRoute)((0, addProductControllerFactory_1.makeAddProductController)()));
    router.get('/products', (0, expressRouteAdapter_1.adaptRoute)((0, loadProductsControllerFactory_1.makeLoadProductsController)()));
    router.get('/product/:id', (0, expressRouteAdapter_1.adaptRoute)((0, loadProductByIdControllerFactory_1.makeLoadProductByIdController)()));
    router.get('/products/:category', (0, expressRouteAdapter_1.adaptRoute)((0, loadProductsByCategoryControllerFactory_1.makeLoadProductsByCategoryController)()));
    router.delete('/products/:productId', (0, expressRouteAdapter_1.adaptRoute)((0, deleteProductByIdControllerFactory_1.makeDeleteProductByIdController)()));
};
//# sourceMappingURL=productRoutes.js.map