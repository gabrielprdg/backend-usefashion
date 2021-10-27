import { DbAthentication } from '../../../../../data/useCases/account/authentication/dbAuthentication'
import { Authentication } from '../../../../../domain/useCases/account/authentication'
import { BcryptAdapter } from '../../../../../infra/criptography/bcryptAdapter/bcryptAdapter'
import { JwtAdapter } from '../../../../../infra/criptography/jwtAdapter/jwtAdapter'
import { AccountMongoRepository } from '../../../../../infra/db/mongoDb/account/accountMongoRepository'
import env from '../../../../config/env'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
