import { LoadProductById } from '../../../../domain/useCases/product/loadProducts'
import { InvalidParamError } from '../../../errors'
import { forbidden } from '../../../helpers/http/httpHelper'
import { HttpRequest } from '../../../protocols'
import { mockLoadProductById } from '../../../test/mockProduct'
import { LoadProductByIdController } from './loadProductById'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    productId: 'any_product_id'
  }
})

type SutTypes = {
  sut: LoadProductByIdController
  loadProductByIdStub : LoadProductById
}

const makeSut = ():SutTypes => {
  const loadProductByIdStub = mockLoadProductById()
  const sut = new LoadProductByIdController(loadProductByIdStub)

  return {
    sut,
    loadProductByIdStub
  }
}

describe('LoadProductById Controller', () => {
  test('Should calls LoadSurveyById with correct values', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadProductByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should return 403 if LoadSurveyById returns null', async () => {
    const { sut, loadProductByIdStub } = makeSut()
    jest.spyOn(loadProductByIdStub, 'loadById').mockReturnValueOnce(Promise.resolve(null))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('surveyId')))
  })
})
