import { SignUpController } from '../../../../../presentation/controllers/signUp/signUpController'
import { Controller } from '../../../../../presentation/protocols'
import { makeAddAccount } from '../../../useCases/account/addAccount/dbAddAccountFactory'
import { makeDbAuthentication } from '../../../useCases/account/authentication/dbAuthenticationFactory'
import { makeSignUpValidation } from './signUpValidationFactory'

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeAddAccount(), makeSignUpValidation(), makeDbAuthentication())
}
