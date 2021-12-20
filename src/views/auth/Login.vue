<template>
  <div class="h-full flex items-center justify-center">
    <el-card class="w-1/3 m-auto">
      <el-form
        :ref="loginFormConfig.ref"
        :model="loginForm"
        :rules="loginFormConfig.rules"
        label-position="top"
      >
        <el-form-item
          :label="loginFormConfig.data.email.label"
          :prop="loginFormConfig.data.email.prop"
        >
          <el-input v-model="loginForm.email" />
        </el-form-item>

        <el-form-item
          :label="loginFormConfig.data['passwordNestedObject.password'].label"
          :prop="loginFormConfig.data['passwordNestedObject.password'].prop"
        >
          <el-input v-model="loginForm.passwordNestedObject.password" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">{{ $t('auth.login') }}</el-button>
          <el-button @click="resetForm">{{ $t('auth.reset') }}</el-button>
          <el-button @click="$router.push({ name: $routeNames.rootPage })">{{ $t('auth.backToHome') }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useFormConfig } from '@/composables'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Login',

  setup () {
    const { t } = useI18n()
    const loginFormConfig = useFormConfig({
      email: { label: t('auth.login'), required: true, type: 'email' },
      'passwordNestedObject.password': { label: t('auth.password'), required: true, minChar: 5 }
    })

    const loginForm = reactive({
      email: '',
      passwordNestedObject: {
        password: ''
      }
    })

    async function submitForm () {
      await loginFormConfig.validate()
      alert('submit!')
    }

    function resetForm () {
      loginFormConfig.resetFields()
      console.log(loginForm)
    }

    return {
      loginForm,
      loginFormConfig,

      submitForm,
      resetForm
    }
  }
})
</script>
