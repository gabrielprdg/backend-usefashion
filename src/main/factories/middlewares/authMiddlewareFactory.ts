import { AuthMiddleware } from '../../../presentation/middlewares/authMiddleware'
import { Middleware } from '../../../presentation/protocols'
import { makeDbLoadAccountByToken } from '../../../main/factories/useCases/account/loadAccountByToken/dbLoadAccountByTokenFactory'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
