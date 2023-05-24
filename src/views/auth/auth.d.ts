interface IAuthWithEmailAndPasswordPayload {
  email: string
  password: string
}

interface IForgotPasswordPayload {
  email: string
}

interface IResetPasswordPayload {
  password: string
}

interface IUserData {
  bio: string
  fullname: string
  tagname: string
  username: string
  avatarUrl: string
}

type TAuthWithEmailAndPasswordPayload = IAuthWithEmailAndPasswordPayload & Omit<IUserData, 'bio' | 'avatarUrl'>
