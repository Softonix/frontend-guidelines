<template>
  <div class="max-w-450 mx-auto my-30">
    <h1 class="mb-30 text-center">Events example</h1>

    <transition-group name="slide-fade">
      <form v-if="submitCount < 3" @submit="onSubmit">
        <div class="flex flex-col mb-10">
          <input
            :value="email"
            type="email"
            name="email"
            class="px-10 py-5 border border-grey-400 rounded"
            v-on="validationListeners"
          >
          <span class="inline-block mt-5 text-red-500 text-xs">{{ emailError }}</span>
        </div>

        <div class="flex flex-col">
          <input
            :value="password"
            type="password"
            name="password"
            class="px-10 py-5 border border-grey-400 rounded"
            v-on="validationPasswordListeners"
          >
          <span class="inline-block mt-5 text-red-500 text-xs">{{ passwordError }}</span>
        </div>

        <button
          :disabled="!isFormValid || isSubmitting"
          :class="[
            'mt-30 py-5 px-10 rounded-sm text-white',
            ((!isFormValid || isSubmitting) && 'bg-grey-400') || 'bg-grey-800'
          ]"
        >
          Example submit
        </button>
      </form>

      <h1 v-else class="text-red-500">Sorry but you have attempted to submit too many times</h1>
    </transition-group>

    <p class="mt-30">Submit count - {{ submitCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useForm, useField } from 'vee-validate'
import { loginSchema } from '@/schemas'

export default defineComponent({
  name: 'VeeValidateEventsExample',

  setup () {
    const initialValues = {
      email: '',
      password: ''
    }

    // Create a form context with the validation schema
    const { meta, handleSubmit, isSubmitting, submitCount, resetForm } = useForm({
      initialValues,
      validationSchema: loginSchema
    })

    // EMAIL
    const {
      errorMessage: emailError,
      value: email,
      handleChange: onEmailChange
    } = useField('email', {
      validateOnValueUpdate: false
    })

    const validationListeners = computed(() => {
      // If the field is valid or have not been validated yet
      if (!emailError.value) {
        return {
          blur: onEmailChange,
          change: onEmailChange,
          input: false
        }
      }

      // Aggressive
      return {
        blur: onEmailChange,
        change: onEmailChange,
        input: onEmailChange
      }
    })

    // PASSWORD
    const {
      errorMessage: passwordError,
      value: password,
      handleChange: onPasswordChange
    } = useField('password', {
      validateOnValueUpdate: false
    })

    const validationPasswordListeners = computed(() => {
      // If the field is valid or have not been validated yet
      // lazy
      if (!passwordError.value) {
        return {
          blur: onPasswordChange,
          change: onPasswordChange,
          input: false
        }
      }

      // Aggressive
      return {
        blur: onPasswordChange,
        change: onPasswordChange,
        input: onPasswordChange
      }
    })

    const isFormValid = computed(() => {
      return meta.value.valid
    })

    // hanldeSubmit prevent form behavior
    const onSubmit = handleSubmit(values => {
      console.log('onSubmit - ', values)

      resetForm({ submitCount: submitCount.value })
    })

    return {
      // EMAIL
      emailError,
      email,
      validationListeners,
      // PASSWORD
      passwordError,
      password,
      validationPasswordListeners,

      meta,

      isSubmitting,
      isFormValid,
      submitCount,
      onSubmit
    }
  }
})
</script>
