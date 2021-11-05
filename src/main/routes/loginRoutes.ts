import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeSignUpController } from '../factories/controllers/login/signUp/signUpControllerFactory'
import { makeLoginController } from '../factories/controllers/login/login/loginControllerFactory'
import { makeLogControllerDecorator } from '../factories/decorators/logControllerDecoratorFactory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeLogControllerDecorator(makeSignUpController())))
  router.post('/login', adaptRoute(makeLogControllerDecorator(makeLoginController())))
}
