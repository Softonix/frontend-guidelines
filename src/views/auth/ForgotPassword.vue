<template>
  <div class="max-w-lg h-full m-auto flex items-center justify-center">
    <el-form
      ref="forgotPasswordRef"
      :model="forgotPasswordModel"
      :rules="forgotPasswordRules"
      class="flex flex-col justify-center border rounded-3xl px-20 py-10 shadow-md"
      label-position="top"
      @submit.prevent="sendPasswordResetEmail(forgotPasswordModel.email)"
    >
      <h1 class="text-3xl mb-5">Forgot Password?</h1>
      <el-form-item class="mb-10" label="Recovery Email Address" prop="email">
        <el-input v-model="forgotPasswordModel.email" />
      </el-form-item>
      <el-form-item>
        <div class="flex flex-1 justify-center">
          <el-button native-type="submit">Send Reset Email</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
const forgotPasswordRef = useElFormRef()
const forgotPasswordModel = useElFormModel<IForgotPasswordRequest>({
  email: ''
})
const forgotPasswordRules = useElFormRules({
  email: [useEmailRule(), useRequiredRule()]
})

const { sendPasswordResetEmail } = useAuthStore()
</script>
