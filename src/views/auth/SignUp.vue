<template>
  <div
    v-loading="loading"
    class="min-h-screen flex m-auto sm:items-center
   gap-10 pt-20 sm:pt-0 px-4 md:px-16 flex-col sm:flex-row items-stretch"
  >
    <el-form
      ref="registerFormRef"
      :model="registerModel"
      :rules="registerRules"
      class="flex-1 flex flex-col sm:block"
      label-position="top"
    >
      <h1 class="font-semibold text-4xl text-center mb-10">Register</h1>

      <el-form-item label="Email" prop="email">
        <el-input v-model.trim="registerModel.email" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="registerModel.password" show-password />
      </el-form-item>

      <el-form-item label="Fullname" prop="fullname">
        <el-input v-model="registerModel.fullname" />
      </el-form-item>

      <el-form-item label="Username" prop="username">
        <el-input v-model.trim="registerModel.username" />
      </el-form-item>

      <p class="text-sm">
        Already have an account?
        <router-link class="text-link-primary" :to="{name: $routeNames.login}">Log In</router-link>
      </p>

      <el-form-item class="mt-auto sm:mt-10">
        <div class="sm:ml-auto w-full sm:w-auto">
          <el-button
            class="w-full"
            :type="$elComponentType.primary"
            @click="submit(registerFormRef)"
          >
            Sign Up
          </el-button>
        </div>
      </el-form-item>
    </el-form>

    <div class="relative flex-[1.5] h-screen hidden lg:block">
      <img
        class="absolute top-1/2 -translate-y-1/2 w-[1024px] shadow-2xl"
        src="/images/auth-img-1.png"
        alt="White theme"
      >

      <img
        class="absolute top-1/2 -translate-y-1/4 w-[1024px] translate-x-7 shadow-2xl"
        src="/images/auth-img-2.png"
        alt="Dark theme"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const registerFormRef = useElFormRef()
const registerModel = useElFormModel<TAuthWithEmailAndPasswordPayload>({
  email: '',
  password: '',
  fullname: '',
  username: ''
})

const registerRules = useElFormRules({
  email: [useEmailRule(), useRequiredRule()],
  password: [useMinLenRule(6), useRequiredRule()],
  fullname: [useMinLenRule(5), useMaxLenRule(25), useRequiredRule()],
  username: [useMinLenRule(5), useMaxLenRule(25), useRequiredRule()]
})

const router = useRouter()

const store = useAuthStore()
const { register } = store
const loading = ref(false)

function submit (formRef) {
  formRef.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true
        await register({
          ...registerModel
        })
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
