class AuthService {
  async loginWithEmailAndPassword (request: IAuthWithEmailAndPasswordRequest) {
    const { data, error } = await useSupabase().auth.signInWithPassword(request)

    if (error) {
      throw error
    }

    return data
  }

  async registerWithEmailAndPassword (request: IAuthWithEmailAndPasswordRequest) {
    const { data, error } = await useSupabase().auth.signUp(request)

    if (error) {
      throw error
    }

    return data
  }

  async logOut () {
    const { error } = await useSupabase().auth.signOut()

    if (error) {
      throw error
    }
  }

  async loadUser () {
    const { data: { user }, error } = await useSupabase().auth.getUser()

    if (error) {
      throw error
    }

    return user
  }

  async sendPasswordResetEmail (email: string) {
    const { error } = await useSupabase().auth.resetPasswordForEmail(email)

    if (error) {
      throw error
    }
  }
}

export const authService = new AuthService()
