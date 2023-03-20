import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { AddOrder } from '../../../../domain/useCases/order/addOrder'
import { noContent, serverError } from '../../../../presentation/helpers/http/httpHelper'
import { HttpRequest } from '../../../../presentation/protocols'
import { mockAddOrder } from '../../../test/mockOrder'
import { AddOrderController } from './addOrderController'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    id: 'any_id',
    user: {
      id: 'any_user_id',
      firstName: 'any_name',
      surname: 'any_surname',
      address: {
        streetName: 'any_street_name',
        streetNumber: 'any_number',
        state: 'any_state',
        cep: 'any_cep',
        complement: 'any_complement',
        district: 'any_district'
      },
      doc: 'any_document',
      email: 'any_email',
      telephone: 'any_telephone'
    },
    product: {
      id: 'any_product_id',
      name: 'any_product_name',
      description: 'any_description',
      count: 3,
      price: 23.3,
      shippingType: 'any_shipping',
      productSize: 'any_size',
      colors: 'any_color'
    }
  }
})

type SutTypes = {
  sut: AddOrderController
  addOrderStub: AddOrder
}

const makeSut = (): SutTypes => {
  const addOrderStub = mockAddOrder()
  const sut = new AddOrderController(addOrderStub)

  return {
    addOrderStub,
    sut
  }
}

describe('AddOrder Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  test('Should call addOrder', async () => {
    const { sut, addOrderStub } = makeSut()
    const updateSpy = jest.spyOn(addOrderStub, 'add')
    await sut.handle(makeFakeRequest())
    expect(updateSpy).toHaveBeenCalled()
  })

  test('Should return 204 if addOrder succeds', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if LoadSurvey throws', async () => {
    const { sut, addOrderStub } = makeSut()
    jest.spyOn(addOrderStub, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
