<template>
  <div class="h-full flex items-center justify-center">
    <el-card class="w-1/3 m-auto">
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
          <el-button :type="$elComponentType.primary" @click="submitForm">{{ t('auth.login') }}</el-button>
          <el-button @click="resetForm">{{ t('auth.reset') }}</el-button>
          <el-button @click="$router.push({ name: $routeNames.rootPage })">{{ t('auth.backToHome') }}</el-button>
        </div>

        <div class="mt-3">
          <el-button v-if="flags['SX-1924-LOGIN-FLAG-EXAMPLE']">Feature Flag Enabled</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const { flags } = useFlags()

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
  console.log(formRef)

  formRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    }
  })
}

function resetForm () {
  formRef.value.resetFields()
  console.log(formModel)
}
</script>
