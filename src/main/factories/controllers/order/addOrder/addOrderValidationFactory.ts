import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddOrderValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['user', 'product', 'address', 'status']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
