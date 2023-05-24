<template>
  <div class="max-w-lg h-full m-auto flex items-center justify-center">
    <el-form
      ref="forgotPasswordRef"
      :model="forgotPasswordModel"
      :rules="forgotPasswordRules"
      class="flex flex-col justify-center border rounded-3xl px-20 py-10 shadow-md"
      label-position="top"
      @submit.prevent="submit(forgotPasswordRef)"
    >
      <h1 class="text-3xl mb-5">Forgot Password?</h1>
      <el-form-item class="mb-10" label="Recovery Email Address" prop="email">
        <el-input v-model.trim="forgotPasswordModel.email" />
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
const forgotPasswordModel = useElFormModel<IForgotPasswordCred>({
  email: ''
})
const forgotPasswordRules = useElFormRules({
  email: [useEmailRule(), useRequiredRule()]
})

const { sendPasswordResetEmail } = useAuthStore()

function submit (formRef) {
  formRef.validate((valid) => {
    if (valid) {
      sendPasswordResetEmail(forgotPasswordModel.email)
    }
  })
}
</script>
