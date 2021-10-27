import { EmailValidator } from '../../validation/protocols/emailValidator'
import validator from 'validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): Boolean {
    return validator.isEmail(email)
  }
}
