"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAthentication = void 0;
class DbAthentication {
    constructor(loadAccountByEmailRepository, hashComparer, encrypter, updateAccessTokenRepository) {
        this.loadAccountByEmailRepository = loadAccountByEmailRepository;
        this.hashComparer = hashComparer;
        this.encrypter = encrypter;
        this.updateAccessTokenRepository = updateAccessTokenRepository;
    }
    async auth(authentication) {
        const account = await this.loadAccountByEmailRepository.loadByEmail(authentication.email);
        if (account) {
            const isValid = await this.hashComparer.compare(authentication.password, account.password);
            if (isValid) {
                const accessToken = await this.encrypter.encrypt(account.id);
                await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken);
                return {
                    accessToken,
                    user: {
                        name: account.name,
                        email: account.email,
                        role: account.role
                    }
                };
            }
        }
        return null;
    }
}
exports.DbAthentication = DbAthentication;
//# sourceMappingURL=dbAuthentication.js.map