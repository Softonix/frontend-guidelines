<template>
  <el-card class="w-1/3 m-auto mt-40">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    >
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Login</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useComponentRef } from '@/composables'
import { ElForm } from 'element-plus'

export default defineComponent({
  name: 'Login',

  setup () {
    const ruleFormRef = useComponentRef<InstanceType<typeof ElForm>>()
    const ruleForm = reactive({
      email: '',
      password: ''
    })
    const rules = {
      email: [
        {
          required: true,
          message: 'Email is required',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Incorrect email',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Password is required',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 5,
          message: 'Password should be 3 to 5',
          trigger: 'blur'
        }
      ]
    }

    function submitForm () {
      if (ruleFormRef.value) {
        ruleFormRef.value.validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }

    function resetForm () {
      if (ruleFormRef.value) {
        ruleFormRef.value.resetFields()
      }
    }

    return {
      ruleFormRef,
      ruleForm,
      rules,

      submitForm,
      resetForm
    }
  }
})
</script>
