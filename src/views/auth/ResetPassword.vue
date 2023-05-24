<template>
  <div class="max-w-lg h-full m-auto flex items-center justify-center">
    <el-form
      ref="resetPasswordRef"
      :model="resetPasswordModel"
      :rules="resetPasswordRules"
      class="flex flex-col justify-center border rounded-3xl px-20 py-10 shadow-md"
      label-position="top"
      @submit.prevent="submit(resetPasswordRef)"
    >
      <h1 class="text-3xl mb-5">Reset Password</h1>
      <el-form-item class="mb-10" label="New Password" prop="password">
        <el-input v-model.trim="resetPasswordModel.password" />
      </el-form-item>
      <el-form-item>
        <div class="flex flex-1 justify-center">
          <el-button native-type="submit">Reset Password</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
const resetPasswordRef = useElFormRef()
const resetPasswordModel = useElFormModel<IResetPasswordPayload>({
  password: ''
})
const resetPasswordRules = useElFormRules({
  password: [useMinLenRule(6), useRequiredRule()]
})

const { resetPassword } = useAuthStore()

function submit (formRef) {
  formRef.validate((valid) => {
    if (valid) {
      resetPassword(resetPasswordModel.password)
    }
  })
}
</script>
