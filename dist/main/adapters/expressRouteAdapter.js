"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            files: req.files,
            params: req.params,
            accountId: req.accountId
        };
        console.log(httpRequest);
        // funcao que receberá o controller e retornara uma funcao de requisição e resposta que tera como resposta o metodo
        // responsavel por lidar com todo controller
        const httpResponse = await controller.handle(httpRequest);
        console.log(httpResponse);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({ error: httpResponse.body.message });
        }
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=expressRouteAdapter.js.map