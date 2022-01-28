import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/httpHelper'
import { Authentication, Controller, HttpRequest, HttpResponse, Validation } from './loginControllerProtocols'

export class LoginController implements Controller {
  private readonly validation: Validation
  private readonly authentication: Authentication

  constructor (authentication: Authentication, validation: Validation) {
    this.authentication = authentication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { email, password } = httpRequest.body

      const { accessToken, user} = await this.authentication.auth({
        email, password
      })

      if (!accessToken) {
        return unauthorized()
      }
      console.log(user)
      return ok({ accessToken, user })
    } catch (err) {
      return serverError(err)
    }
  }
}
