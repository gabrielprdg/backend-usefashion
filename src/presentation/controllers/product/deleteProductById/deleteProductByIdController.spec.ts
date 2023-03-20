import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { DeleteProductById } from '../../../../domain/useCases/product/deleteProductById'
import { noContent, serverError } from '../../../helpers/http/httpHelper'
import { HttpRequest } from '../../../protocols'
import { mockDeleteProductById } from '../../../test/mockProduct'
import { DeleteProductByIdController } from './deleteProductByIdController'

const makeFakeRequest = (): HttpRequest => ({
  params: 'any_id'
})

type SutTypes = {
  sut: DeleteProductByIdController
  deleteProductByIdStub: DeleteProductById
}

const makeSut = (): SutTypes => {
  const deleteProductByIdStub = mockDeleteProductById()
  const sut = new DeleteProductByIdController(deleteProductByIdStub)

  return {
    sut,
    deleteProductByIdStub
  }
}

describe('DeleteProductById Controller', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  it('Should call DeleteProductById with correct values', async () => {
    const { sut, deleteProductByIdStub } = makeSut()
    const deleteSpy = jest.spyOn(deleteProductByIdStub, 'delete')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(deleteSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  it('Should return 500 if DeleteProductById throws', async () => {
    const { sut, deleteProductByIdStub } = makeSut()
    jest.spyOn(deleteProductByIdStub, 'delete').mockImplementationOnce(throwError)
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
