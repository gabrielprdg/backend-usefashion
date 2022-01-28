export type UserData = {
  name: string,
  email: string,
  role?: string
}

export type AuthData = {
  accessToken: string
  user: UserData
}

export interface Encrypter {
  encrypt: (value: string) => Promise<string>
}
