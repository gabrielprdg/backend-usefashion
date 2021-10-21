import { AccountModel } from '../../domain/models/account'
import { mockAccountModel } from '../../domain/test/mockAccount'
import { AddAccount, AddAccountParams } from '../../domain/useCases/account/addAccount'
import { Authentication, AuthenticationParams } from '../../domain/useCases/account/authentication'
import { LoadAccountByToken } from '../../domain/useCases/account/loadAccountByToken'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<string> {
      return Promise.resolve('any_token')
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenStub()
}
