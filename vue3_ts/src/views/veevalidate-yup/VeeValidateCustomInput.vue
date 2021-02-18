<template>
  <div class="max-w-450 mx-auto my-30">
    <h1 class="mb-30 text-center">Form example</h1>
    <Form #default="{ values }" :validation-schema="loginSchema" @submit="onSubmit">
      <div>{{ values }}</div>
      <VeeValidateInput
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        class="mb-10"
      />

      <VeeValidateInput
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        class="mb-10"
      />

      <VeeValidateInput
        v-model="customValue"
        name="custom"
        label="Custom event"
        placeholder="Write a text"
      />

      <button class="mt-30 px-10 py-5 text-white bg-grey-800 hover:bg-grey-600 rounded">Submit</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Form } from 'vee-validate'
import VeeValidateInput from './components/VeeValidateInput.vue'

import { loginSchema } from '@/schemas'
import { IVeeValidateLogin } from '@/types'

export default defineComponent({
  name: 'VeeValidateCustomInput',

  components: { Form, VeeValidateInput },

  setup () {
    const customValue = ref('')

    function onSubmit (values: IVeeValidateLogin) {
      console.log(values)
    }

    return {
      customValue,
      loginSchema,
      onSubmit
    }
  }
})
</script>
