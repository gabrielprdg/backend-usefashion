import { AccountModel } from '../../../../domain/models/account'
import { AddAccountParams } from '../../../../domain/useCases/account/addAccount'

export interface AddAccountRepository {
  add: (addAccountParams: AddAccountParams) => Promise<AccountModel>
}
