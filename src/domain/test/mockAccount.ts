import { AccountModel } from '../models/account'
import { AddAccountParams } from '../useCases/account/addAccount'
import { AuthenticationParams } from '../useCases/account/authentication'

export const mockAccountModel = (): AccountModel => ({
  id: 'any_id',
  name: 'any_name',
  email: 'any_email@gmail.com',
  password: 'any_password'
})

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@gmail.com',
  password: 'any_password'
})

export const mockFakeAuthentication = (): AuthenticationParams => ({
  email: 'any_email@gmail.com',
  password: 'any_passwor'
})
