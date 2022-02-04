import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddCheckoutValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['token', 'payment_method_id', 'transaction_amount', 'description' , 'installments' ,'email']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
