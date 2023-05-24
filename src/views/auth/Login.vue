<template>
  <div
    class="min-h-screen flex m-auto sm:items-center
   gap-20 pt-20 sm:pt-0 px-4 md:px-16 flex-col sm:flex-row items-stretch"
  >
    <el-form
      ref="loginFormRef"
      :model="loginModel"
      :rules="loginRules"
      class="flex-1 flex flex-col sm:block"
      label-position="top"
      @submit.prevent="loginWithEmailAndPassword(loginModel)"
    >
      <h1 class="font-semibold text-4xl text-center mb-10">Log In</h1>
      <el-form-item label="Email" prop="email">
        <el-input v-model="loginModel.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginModel.password" />
      </el-form-item>
      <div class="flex flex-col gap-2 text-sm">
        <p>
          Forgot your password?
          <router-link class="text-link-primary " :to="{name: $routeNames.forgotPassword}">Reset Password</router-link>
        </p>
        <p>
          Don't have an account?
          <router-link class="text-link-primary " :to="{name: $routeNames.signUp}">Sign Up</router-link>
        </p>
      </div>
      <el-form-item class="mt-auto sm:mt-10">
        <div class="sm:ml-auto w-full sm:w-auto">
          <el-button
            class="w-full"
            native-type="submit"
            :type="$elComponentType.primary"
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
const loginModel = useElFormModel<IAuthWithEmailAndPasswordRequest>({ email: '', password: '' })
const loginRules = useElFormRules({
  email: [useEmailRule(), useRequiredRule()],
  password: [useMinLenRule(6), useRequiredRule()]
})

const { loginWithEmailAndPassword } = authService
</script>
