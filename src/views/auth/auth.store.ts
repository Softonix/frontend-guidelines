import { type User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('authStore', () => {
  const currentUser = ref<User | null>(null)

  const router = useRouter()

  const isAuthenticated = computed(() => !!currentUser)

  async function loadUser () {
    currentUser.value = await authService.loadUser()
  }

  async function logOut () {
    authService.logOut().then(() => {
      currentUser.value = null
      router.replace({ name: 'login' })
    })
  }

  function clearUser () {
    currentUser.value = null
  }

  async function sendPasswordResetEmail (email: string) {
    authService.sendPasswordResetEmail(email)
  }

  useSupabase().auth.onAuthStateChange((event, session) => {
    switch (event) {
      case 'INITIAL_SESSION':
        break
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
    isAuthenticated,
    loadUser,
    logOut,
    clearUser,
    sendPasswordResetEmail
  }
})
