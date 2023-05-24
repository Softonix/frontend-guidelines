interface IAuthWithEmailAndPasswordCred {
  email: string
  password: string
}

interface IForgotPasswordCred {
  email: string
}

interface IResetPasswordCred {
  password: string
}

interface IUserData {
  bio: string
  fullname: string
  tagname: string
  username: string
  avatarUrl: string
}

type TAuthWithEmailAndPasswordRequest = IAuthWithEmailAndPasswordCred & Omit<IUserData, 'bio' | 'avatarUrl'>
