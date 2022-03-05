import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddCheckoutMercadoPagoValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['preference']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
