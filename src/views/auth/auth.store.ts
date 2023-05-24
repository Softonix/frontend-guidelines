import { type User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('authStore', () => {
  const currentUser = ref<User | null>(null)
  const loading = ref(false)

  const router = useRouter()

  const isAuthenticated = computed(() => !!currentUser)

  async function logIn (payload: IAuthWithEmailAndPasswordPayload) {
    try {
      loading.value = true
      await authService.loginWithEmailAndPassword(payload)
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  async function register (payload: TAuthWithEmailAndPasswordPayload) {
    try {
      loading.value = true
      await authService.registerWithEmailAndPassword(payload)
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  async function loadUser () {
    try {
      loading.value = true
      currentUser.value = await authService.loadUser()
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  async function logOut () {
    try {
      loading.value = true
      await authService.logOut()
      currentUser.value = null
      router.replace({ name: 'login' })
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  function clearUser () {
    currentUser.value = null
  }

  async function sendPasswordResetEmail (email: string) {
    try {
      loading.value = true
      await authService.sendPasswordResetEmail(email)
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  async function resetPassword (password: string) {
    try {
      loading.value = true
      await authService.resetPassword(password)
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  useSupabase().auth.onAuthStateChange((event, session) => {
    switch (event) {
      case 'SIGNED_IN':
        currentUser.value = session?.user || null
        router.replace({ name: 'chat' })
        break
      case 'SIGNED_OUT':
        clearUser()
        break
    }
  })

  return {
    currentUser,
    loading,
    isAuthenticated,
    logIn,
    register,
    loadUser,
    logOut,
    clearUser,
    sendPasswordResetEmail,
    resetPassword
  }
})
