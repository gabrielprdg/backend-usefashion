"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoHelper = void 0;
const mongodb_1 = require("mongodb");
exports.mongoHelper = {
    client: null,
    uri: null,
    async connect(uri) {
        this.uri = uri;
        this.client = await mongodb_1.MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    },
    async disconnect() {
        await this.client.close();
        this.client = null;
    },
    async getCollection(name) {
        var _a;
        // isConnected -> metodo que verifica se o clinet esta conectado ou nao
        if (!((_a = this.client) === null || _a === void 0 ? void 0 : _a.isConnected())) {
            await this.connect(this.uri);
        }
        return this.client.db().collection(name);
    },
    map: (data) => {
        const { _id, ...collectionWithoutId } = data;
        return Object.assign({}, collectionWithoutId, { id: _id });
    },
    mapCollection: (collection) => {
        return collection.map(i => exports.mongoHelper.map(i));
    }
};
//# sourceMappingURL=mongoHelper.js.map