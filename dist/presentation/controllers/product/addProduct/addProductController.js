"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductController = void 0;
/* eslint-disable no-unused-expressions */
const errors_1 = require("../../../errors");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddProductController {
    constructor(addProduct, validation) {
        this.addProduct = addProduct;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpHelper_1.badRequest)(error);
            }
            console.log('man', httpRequest);
            const files = httpRequest.files;
            console.log(files);
            const images = files.map(item => {
                const newi = {};
                newi.name = item.originalname;
                newi.size = item.size;
                newi.key = item.key;
                newi.url = item.location;
                return newi;
            });
            const { name, description, category, price, colors, productSize } = httpRequest.body;
            await this.addProduct.add({ name, description, category, price, colors, productSize, images, createdAt: new Date(), count: 1 });
            return (0, httpHelper_1.noContent)();
        }
        catch (err) {
            return (0, httpHelper_1.serverError)(new errors_1.ServerError());
        }
    }
}
exports.AddProductController = AddProductController;
//# sourceMappingURL=addProductController.js.map