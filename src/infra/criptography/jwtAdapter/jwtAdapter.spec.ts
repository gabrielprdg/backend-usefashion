import jwt from 'jsonwebtoken'
import { JwtAdapter } from './jwtAdapter'

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return Promise.resolve('any_token')
  },

  async verify (): Promise<string> {
    return Promise.resolve('any_token')
  }
}))

const makeSut = (): JwtAdapter => {
  return new JwtAdapter('secret')
}

describe('Jwt Adapter', () => {
  describe('sign()', () => {
    test('Should call sign with correct values', async () => {
      const sut = makeSut()
      const signSpy = jest.spyOn(jwt, 'sign')
      await sut.encrypt({id: 'any_id',name: 'any_name',email: 'any_name'})
      expect(signSpy).toHaveBeenCalledWith({id: 'any_id',name: 'any_name',email: 'any_name'}, 'secret')
    })

    test('Should return  token on sign succeeds', async () => {
      const sut = makeSut()
      const accessToken = await sut.encrypt({id: 'any_id',name: 'any_name',email: 'any_name'})
      expect(accessToken).toBe('any_token')
    })

    test('Should throws if sign throws', async () => {
      const sut = makeSut()
      jest.spyOn(jwt, 'sign').mockImplementationOnce(() => { throw new Error() })
      const promise = sut.encrypt({id: 'any_id',name: 'any_name',email: 'any_name'})
      await expect(promise).rejects.toThrow()
    })
  })

  describe('verify()', () => {
    test('Should call verify with correct values', async () => {
      const sut = makeSut()
      const verifySpy = jest.spyOn(jwt, 'verify')
      await sut.decrypt('any_token')
      expect(verifySpy).toHaveBeenCalledWith('any_token', 'secret')
    })

    test('Should return a value on verify success', async () => {
      const sut = makeSut()
      const value = await sut.decrypt('any_token')
      expect(value).toBe('any_token')
    })

    test('Should throws if verify throws', async () => {
      const sut = makeSut()
      jest.spyOn(jwt, 'verify').mockImplementationOnce(() => { throw new Error() })
      const promise = sut.decrypt('any_token')
      await expect(promise).rejects.toThrow()
    })
  })
})
