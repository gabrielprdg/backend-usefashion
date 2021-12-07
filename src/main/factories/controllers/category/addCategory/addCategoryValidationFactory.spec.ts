import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'
import { makeAddCategoryValidation } from './addCategoryValidationFactory'

jest.mock('../../../../../validation/validators/validationComposite')

describe('AddCategoryValidation Factory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeAddCategoryValidation()
    const validations: Validation[] = []
    for (const field of ['name']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
