import { LoginController } from '../../../../../presentation/controllers/login/loginController'
import { Controller } from '../../../../../presentation/protocols'
import { makeLoginValidation } from './loginValidationFactory'
import { makeDbAuthentication } from '../../../useCases/account/authentication/dbAuthenticationFactory'

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication(), makeLoginValidation())
}
