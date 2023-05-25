import { type User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('authStore', () => {
  const currentUser = ref<User | null>(null)

  const router = useRouter()

  const isAuthenticated = computed(() => !!currentUser)

  async function logIn (payload: IAuthWithEmailAndPasswordPayload) {
    await authService.loginWithEmailAndPassword(payload)
  }

  async function register (payload: TAuthWithEmailAndPasswordPayload) {
    await authService.registerWithEmailAndPassword(payload)
  }

  async function loadUser () {
    currentUser.value = await authService.loadUser()
  }

  async function logOut () {
    await authService.logOut()
    currentUser.value = null
    router.replace({ name: 'login' })
  }

  function clearUser () {
    currentUser.value = null
  }

  async function sendPasswordResetEmail (email: string) {
    await authService.sendPasswordResetEmail(email)
  }

  async function resetPassword (password: string) {
    await authService.resetPassword(password)
  }

  function startListenToAuthStateChange () {
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
  }

  return {
    currentUser,
    isAuthenticated,
    logIn,
    register,
    loadUser,
    logOut,
    clearUser,
    sendPasswordResetEmail,
    resetPassword,
    startListenToAuthStateChange
  }
})
