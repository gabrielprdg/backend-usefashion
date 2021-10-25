import { AccountModel } from '../../domain/models/account'
import { mockAccountModel } from '../../domain/test/mockAccount'
import { AddAccountParams } from '../../domain/useCases/account/addAccount'
import { AddAccountRepository } from '../protocols/db/account/addAccountRepository'
import { LoadAccountByEmailRepository } from '../protocols/db/account/loadAccountByEmailRepository'

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
