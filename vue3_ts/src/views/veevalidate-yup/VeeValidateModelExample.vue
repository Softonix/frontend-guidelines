<template>
  <div class="max-w-450 mx-auto my-30">
    <h1 class="mb-30 text-center">Model example</h1>

    <div class="flex flex-col mb-10">
      <input v-model="email" type="email" name="email" class="px-10 py-5 border border-grey-400 rounded">
      <span class="inline-block mt-5 text-red-500 text-xs">{{ emailError }}</span>
    </div>

    <div class="flex flex-col">
      <input v-model="password" type="password" name="password" class="px-10 py-5 border border-grey-400 rounded">
      <span class="inline-block mt-5 text-red-500 text-xs">{{ passwordError }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useForm, useField } from 'vee-validate'
import { loginSchema } from '@/schemas'

export default defineComponent({
  name: 'VeeValidateModelExample',

  setup () {
    // Create a form context with the validation schema
    useForm({
      validationSchema: loginSchema
    })

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField('email')
    const { value: password, errorMessage: passwordError } = useField('password')

    return {
      email,
      emailError,
      password,
      passwordError
    }
  }
})
</script>
