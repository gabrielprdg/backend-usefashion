import mockdate from 'mockdate'
import { throwError } from '../../../../domain/test'
import { mockProductModel } from '../../../../domain/test/mockProduct'
import { LoadProductByIdRepository } from '../../../protocols/db/product/loadProductByIdRepository'
import { mockLoadProductByIdRepository } from '../../../test/mockDbProduct'
import { DbLoadProductById } from './dbLoadProductById'

type SutTypes = {
  loadProductByIdRepositoryStub: LoadProductByIdRepository
  sut: DbLoadProductById
}

const makeSut = ():SutTypes => {
  const loadProductByIdRepositoryStub = mockLoadProductByIdRepository()
  const sut = new DbLoadProductById(loadProductByIdRepositoryStub)

  return {
    loadProductByIdRepositoryStub,
    sut
  }
}

describe('DbLoadProductById', () => {
  beforeAll(() => {
    mockdate.set(new Date())
  })

  afterAll(() => {
    mockdate.reset()
  })

  test('Should call LoadProductByIdRepository', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadProductByIdRepositoryStub, 'loadById')
    await sut.loadById('any_id')
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return a Products on success ', async () => {
    const { sut } = makeSut()
    const survey = await sut.loadById('any_id')
    expect(survey).toEqual(mockProductModel())
  })

  test('Should throws if LoadSurveyByIdRepository throws', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut()
    jest.spyOn(loadProductByIdRepositoryStub, 'loadById').mockImplementationOnce(throwError)

    const promise = sut.loadById('any_id')
    // espera que o metodo lanse um erro
    await expect(promise).rejects.toThrow()
  })
})
