"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddAccount = void 0;
class DbAddAccount {
    constructor(hasher, addAccountRepo, loadAccountByEmailRepository) {
        this.hasher = hasher;
        this.addAccountRepo = addAccountRepo;
        this.loadAccountByEmailRepository = loadAccountByEmailRepository;
    }
    async add(accountData) {
        const accountByEmail = await this.loadAccountByEmailRepository.loadByEmail(accountData.email);
        if (!accountByEmail) {
            const hashedPassword = await this.hasher.hash(accountData.password);
            const account = await this.addAccountRepo.add(Object.assign({}, accountData, { password: hashedPassword }));
            return Promise.resolve(account);
        }
        return null;
    }
}
exports.DbAddAccount = DbAddAccount;
//# sourceMappingURL=dbAddAccount.js.map