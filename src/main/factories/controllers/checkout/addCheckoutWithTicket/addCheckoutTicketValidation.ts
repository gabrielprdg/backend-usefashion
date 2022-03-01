import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddCheckoutTicketValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['payment_method_id', 'transaction_amount', 'description' ,'email', 'first_name' , 'last_name', 'type', 'number']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
