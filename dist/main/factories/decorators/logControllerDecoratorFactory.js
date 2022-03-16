"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLogControllerDecorator = void 0;
const logMongoRepository_1 = require("../../../infra/db/mongoDb/log/logMongoRepository");
const logControllerDecorator_1 = require("../../../main/decorators/logControllerDecorator");
const makeLogControllerDecorator = (controller) => {
    const logMongoRepository = new logMongoRepository_1.LogMongoRepository();
    return new logControllerDecorator_1.LogControllerDecorator(controller, logMongoRepository);
};
exports.makeLogControllerDecorator = makeLogControllerDecorator;
//# sourceMappingURL=logControllerDecoratorFactory.js.map