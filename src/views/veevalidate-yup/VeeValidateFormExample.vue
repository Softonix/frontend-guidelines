<template>
  <div class="max-w-450 mx-auto my-30">
    <h1 class="mb-30 text-center">Form example</h1>

    <Form
      #default="{ errors }"
      :validation-schema="loginSchema"
      class="flex flex-col"
      @submit="onSubmit"
    >
      <Field name="email" type="email" class="mb-5 px-10 py-5 rounded border border-grey-400" />
      <span class="text-xs text-red-500">{{ errors.email }}</span>

      <Field name="password" type="password" class="mt-10 mb-5 px-10 py-5 rounded border border-grey-400" />
      <span class="text-xs text-red-500">{{ errors.password }}</span>

      <Field as="select" name="country" class="mt-10 px-10 py-5 border border-grey-400 rounded">
        <option value="ua">Ukraine</option>
        <option value="us">USA</option>
        <option value="it">Italy</option>
      </Field>

      <button class="mt-30 py-5 px-10 rounded-sm text-white bg-grey-800">
        Example submit
      </button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginSchema } from '@/schemas'

import { Form, Field } from 'vee-validate'

export default defineComponent({
  name: 'VeeValidateFormExample',

  components: {
    Form,
    Field
  },

  setup () {
    const onSubmit = () => {
      console.log('onSubmit')
    }

    return {
      loginSchema,
      onSubmit
    }
  }
})
</script>
