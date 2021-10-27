import { AccountModel } from '../../domain/models/account'
import { mockAccountModel } from '../../domain/test/mockAccount'
import { AddAccountParams } from '../../domain/useCases/account/addAccount'
import { AddAccountRepository } from '../protocols/db/account/addAccountRepository'
import { LoadAccountByEmailRepository } from '../protocols/db/account/loadAccountByEmailRepository'
import { LoadAccountByTokenRepository } from '../protocols/db/account/loadAccountByTokenRepository'
import { UpdateAccessTokenRepository } from '../protocols/db/account/updateAccessTokenRepository'

export const mockAddAccountRepository = (): AddAccountRepository => {
  class AddAccountRepositoryStub implements AddAccountRepository {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }

  return new AddAccountRepositoryStub()
}

export const mockLoadAccountByEmailRepository = (): LoadAccountByEmailRepository => {
  class LoadAccountByEmailRepositoryStub implements LoadAccountByEmailRepository {
    async loadByEmail (email: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }

  return new LoadAccountByEmailRepositoryStub()
}

export const mockLoadAccountByTokenRepository = (): LoadAccountByTokenRepository => {
  class LoadAccountByTokenRepositoryStub implements LoadAccountByTokenRepository {
    async loadByToken (token: string, role: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }

  return new LoadAccountByTokenRepositoryStub()
}

export const mockUpdateAccessTokenRepository = (): UpdateAccessTokenRepository => {
  class UpdateAccessToken implements UpdateAccessTokenRepository {
    async updateAccessToken (id: string, token: string): Promise<void> {
      return Promise.resolve()
    }
  }

  return new UpdateAccessToken()
}
