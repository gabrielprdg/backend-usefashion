import { SignUpController } from './signUpController'

type SutTypes = {
  sut: SignUpController
  addAccount: AddAccount
}

const makeSut = (): SutTypes => {
  const sut = new SignUpController()

  return {

  }
}

describe('SignUpController', () => {
  test('Should return 500 if AddAccount throws', () => {
    const sut = new SignUpController()
  })

  test('Should call AddAccount with correct values', () => {
    const sut = new SignUpController()
  })

  test('Should return 403 if AddAccount returns null', () => {
    const sut = new SignUpController()
  })

  test('Should return 200 if valid data is provided', () => {
    const sut = new SignUpController()
  })

  test('Should call Validation is provided with correct value', () => {
    const sut = new SignUpController()
  })

  test('Should return 400 if Validation return an error', () => {
    const sut = new SignUpController()
  })

  test('Should call Authentication with correct values', () => {
    const sut = new SignUpController()
  })

  test('Should return 500 if Authentication throws', () => {

  })
})

console.log('wefghjk')
