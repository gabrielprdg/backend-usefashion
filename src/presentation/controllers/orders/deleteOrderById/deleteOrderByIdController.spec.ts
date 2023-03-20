import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { DeleteOrderById } from '../../../../domain/useCases/order/deleteOrderById'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest } from '../../../protocols'
import { mockDeleteOrderById } from '../../../test/mockOrder'
import { DeleteOrderByIdController } from './deleteOrderByIdController'

const makeFakeRequest = (): HttpRequest => ({
  params: 'any_id'
})

type SutTypes = {
  sut: DeleteOrderByIdController
  deleteOrderByIdStub: DeleteOrderById
}

const makeSut = (): SutTypes => {
  const deleteOrderByIdStub = mockDeleteOrderById()
  const sut = new DeleteOrderByIdController(deleteOrderByIdStub)

  return {
    sut,
    deleteOrderByIdStub
  }
}

describe('DeleteOrderById Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  it('Should call DeleteOrderById with correct values', async () => {
    const { sut, deleteOrderByIdStub } = makeSut()
    const deleteSpy = jest.spyOn(deleteOrderByIdStub, 'delete')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(deleteSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  it('Should return 500 if DeleteOrderById throws', async () => {
    const { sut, deleteOrderByIdStub } = makeSut()
    jest.spyOn(deleteOrderByIdStub, 'delete').mockImplementationOnce(throwError)
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
