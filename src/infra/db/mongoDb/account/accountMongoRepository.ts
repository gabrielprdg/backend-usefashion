import { AddAccountRepository } from '../../../../data/protocols/db/account/addAccountRepository'
import { AddAccountParams } from '../../../../domain/useCases/account/addAccount'
import { AccountModel } from '../../../../domain/models/account'
import { mongoHelper } from '../helper/mongoHelper'
import { LoadAccountByEmailRepository } from '../../../../data/protocols/db/account/loadAccountByEmailRepository'
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/account/updateAccessTokenRepository'
import { LoadAccountByTokenRepository } from '../../../../data/protocols/db/account/loadAccountByTokenRepository'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository {
  async add (accountData: AddAccountParams): Promise<AccountModel> {
    const accountCollection = await mongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const accountD = result.ops[0]
    return mongoHelper.map(accountD)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await mongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    if (account) {
      return mongoHelper.map(account)
    }
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await mongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    const accountCollection = await mongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    })
    if (account) {
      return mongoHelper.map(account)
    }
  }
}
