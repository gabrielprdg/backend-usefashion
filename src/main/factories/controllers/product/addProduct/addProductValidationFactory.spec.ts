import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'
import { makeAddProductValidation } from './addProductValidationFactory'

jest.mock('../../../../../validation/validators/validationComposite')

describe('AddProductValidation Factory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeAddProductValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'description', 'category', 'price', 'images']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
