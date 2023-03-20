"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddShippingValuesController = void 0;
const shippingValue_1 = require("../../../../infra/shipping/shippingValue");
const httpHelper_1 = require("../../../helpers/http/httpHelper");
class AddShippingValuesController {
    async handle(httpRequest) {
        try {
            const { sCepOrigem, sCepDestino, nVlPeso, nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nCdServico, // Array com os códigos de serviço
            nVlDiametro } = httpRequest.body;
            const ShippingValues = new shippingValue_1.ShippingDetails();
            const res = await ShippingValues.loadPriceData({
                sCepOrigem,
                sCepDestino,
                nVlPeso,
                nCdFormato,
                nVlComprimento,
                nVlAltura,
                nVlLargura,
                nCdServico,
                nVlDiametro
            });
            return (0, httpHelper_1.ok)(res);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.AddShippingValuesController = AddShippingValuesController;
//# sourceMappingURL=addShippingValuesController.js.map