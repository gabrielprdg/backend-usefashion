import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockOrders } from '../../../../domain/test/mockOrder'
import { LoadOrders } from '../../../../domain/useCases/order/loadOrders'
import { noContent, ok, serverError } from '../../../../presentation/helpers/http/httpHelper'
import { mockLoadOrders } from '../../../test/mockOrder'
import { LoadOrdersController } from './loadOrdersController'

type SutTypes = {
  sut: LoadOrdersController
  loadOrdersStub: LoadOrders
}

const makeSut = (): SutTypes => {
  const loadOrdersStub = mockLoadOrders()
  const sut = new LoadOrdersController(loadOrdersStub)

  return {
    loadOrdersStub,
    sut
  }
}

describe('LoadOrders Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })
  it('Should call LoadOrders', async () => {
    const { sut, loadOrdersStub } = makeSut()
    const loadAllSpy = jest.spyOn(loadOrdersStub, 'loadAll')
    await sut.handle({})
    expect(loadAllSpy).toHaveBeenCalled()
  })

  it('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(ok(mockOrders()))
  })

  it('Should return 204 if LoadOrders returns empty', async () => {
    const { sut, loadOrdersStub } = makeSut()
    jest.spyOn(loadOrdersStub, 'loadAll').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if LoadSurvey throws', async () => {
    const { sut, loadOrdersStub } = makeSut()
    jest.spyOn(loadOrdersStub, 'loadAll').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
