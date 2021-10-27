import { DbAddAccount } from '../../../../../data/useCases/account/addAccount/dbAddAccount'
import { AddAccount } from '../../../../../domain/useCases/account/addAccount'
import { BcryptAdapter } from '../../../../../infra/criptography/bcryptAdapter/bcryptAdapter'
import { AccountMongoRepository } from '../../../../../infra/db/mongoDb/account/accountMongoRepository'

export const makeAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepo = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepo, accountMongoRepo)
}
