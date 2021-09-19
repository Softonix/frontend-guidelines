<template>
  <div class="max-w-450 mx-auto my-30">
    <h1 class="mb-30 text-center">Manually errors example</h1>

    <form class="mb-30" @submit="onSubmit">
      <div class="flex flex-col mb-10">
        <input
          v-model="email"
          type="email"
          name="email"
          class="px-10 py-5 border border-grey-400 rounded"
        >
        <span class="inline-block mt-5 text-red-500">{{ emailError }}</span>
      </div>

      <div class="flex flex-col">
        <input
          v-model="password"
          type="password"
          name="password"
          class="px-10 py-5 border border-grey-400 rounded"
        >
        <span class="inline-block mt-5 text-red-500">{{ passwordError }}</span>
      </div>

      <button class="mt-30 py-5 px-10 rounded-sm text-white bg-grey-800">
        Example submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { veevalidateYupService } from './veevalidate-yup.service'

import { useField, useForm } from 'vee-validate'
import { loginSchema } from '@/schemas'
import { IVeeValidateLogin, IVeeValidateLoginResponse } from '@/types'

export default defineComponent({
  name: 'VeeValidateManuallyErrors',

  setup () {
    const { handleSubmit, setFieldError } = useForm({ validationSchema: loginSchema })

    // EMAIL
    const { errorMessage: emailError, value: email } = useField('email')

    // PASSWORD
    const { errorMessage: passwordError, value: password } = useField('password')

    const onSubmit = handleSubmit(async values => {
      // for example doing request and receiving an error
      try {
        // Send data to the API
        const response = await veevalidateYupService.login(values as IVeeValidateLogin) as IVeeValidateLoginResponse

        console.log(response)
      } catch (error: any) {
        // set single field error
        if (error.response?.data?.error?.message) {
          setFieldError('email', error.response.data.error.message)
        }

        // set multiple errors, assuming the keys are the names of the fields
        // and the values is the error message
        // setErrors(response.errors)
      }
    })

    return {
      //  EMAIL
      emailError,
      email,
      // PASSWORD
      password,
      passwordError,

      // METHODS
      onSubmit
    }
  }
})
</script>
