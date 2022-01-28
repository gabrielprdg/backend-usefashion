import { AuthData } from "../../../data/protocols/criptography/encrypter";

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (authenticationParams: AuthenticationParams) => Promise<AuthData>
}
