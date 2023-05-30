<template>
  <div
    v-loading="loading"
    class="min-h-screen flex m-auto sm:items-center
   gap-20 pt-20 sm:pt-0 px-4 md:px-16 flex-col sm:flex-row items-stretch"
  >
    <el-form
      ref="loginFormRef"
      :model="loginModel"
      :rules="loginRules"
      class="flex-1 flex flex-col sm:block"
      label-position="top"
    >
      <h1 class="font-semibold text-4xl text-center mb-10">Log In</h1>

      <el-form-item label="Email" prop="email">
        <el-input v-model.trim="loginModel.email" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="loginModel.password" show-password />
      </el-form-item>

      <div class="flex gap-2 justify-between text-sm flex-wrap">
        <p>
          Don't have an account?
          <router-link class="text-link-primary " :to="{name: $routeNames.signUp}">Sign Up</router-link>
        </p>

        <router-link
          class="text-link-primary"
          :to="{name: $routeNames.forgotPassword}"
        >
          Forgot your password?
        </router-link>
      </div>

      <el-form-item class="mt-auto sm:mt-10">
        <div class="sm:ml-auto w-full sm:w-auto">
          <el-button
            class="w-full"
            :type="$elComponentType.primary"
            @click="submit(loginFormRef)"
          >
            Log In
          </el-button>
        </div>
      </el-form-item>
    </el-form>
    <Logo class="relative flex-1 h-screen hidden lg:block" />
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/components/icons/Logo.vue'

const loginFormRef = useElFormRef()
const loginModel = useElFormModel<IAuthWithEmailAndPasswordPayload>({ email: '', password: '' })
const loginRules = useElFormRules({
  email: [useEmailRule(), useRequiredRule()],
  password: [useMinLenRule(6), useRequiredRule()]
})

const router = useRouter()

const store = useAuthStore()
const { logIn } = store
const loading = ref(false)

function submit (formRef) {
  formRef.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true
        await logIn(loginModel)
        router.push({ name: 'chat' })
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }
  })
}
</script>
