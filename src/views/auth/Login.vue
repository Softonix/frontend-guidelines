<template>
  <div class="h-full flex items-center justify-center">
    <el-card class="w-[450px] max-w-full m-auto">
      <el-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        label-position="top"
      >
        <el-form-item label="email" prop="email">
          <el-input v-model="formModel.email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="formModel.password" />
        </el-form-item>

        <div>
          <el-button :type="'primary'" @click="submitForm">{{ t('auth.login') }}</el-button>
          <el-button @click="resetForm">{{ t('auth.reset') }}</el-button>
          <el-button @click="$router.push({ name: $routeNames.rootPage })">{{ t('auth.backToHome') }}</el-button>
        </div>

        <div class="mt-3" data-testid="feature-flag">
          <FF name="FF-SX-1924-LOGIN-FLAG-EXAMPLE" show-badge>
            <el-button>Feature Flag Enabled</el-button>
          </FF>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const formRef = useElFormRef()
const formModel = reactive({
  email: '',
  password: ''
})

const formRules = useElFormRules({
  email: [
    useRequiredRule(),
    useEmailRule()
  ],
  password: [
    useRequiredRule(),
    useMinLenRule(5)
  ]
})

async function submitForm () {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      alert('submit!')
    }
  })
}

function resetForm () {
  formRef.value.resetFields()
}
</script>
