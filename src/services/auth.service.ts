interface IUser {
  email: string
  password: string
}

interface IAuthService {
  loginWithEmailAndPassword(): void
  registerWithEmailAndPassword(): void
}

class AuthService<T = unkown> {
  constructor (authProvider: T) {
    this.provider = authProvider
  }

  loginWithEmailAndPassword () {

  }

  registerWithEmailAndPassword () {

  }

  logOut () {
    
  }
}

export const exampleGeneralService = new AuthService()
