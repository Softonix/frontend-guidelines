<template>
  <div :class="['flex flex-col', { 'has-error': !!errorMessage, success: meta.valid }]">
    <label :for="name" class="cursor-pointer">{{ label }}</label>

    <input
      :id="name"
      :name="name"
      :type="type"
      :value="inputValue"
      class="mt-5 px-10 py-5 border border-grey-400 rounded"
      @input="onInputHandler"
      @blur="handleBlur"
    >

    <p v-show="errorMessage || meta.valid" class="mt-5 text-xs text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'

export default defineComponent({
  name: 'AppInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },

  emits: ['update:modelValue'],

  setup (props, { emit }) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta
    } = useField(props.name, undefined, {
      initialValue: props.modelValue
    })

    function onInputHandler (e: InputEvent) {
      const target = e.target as HTMLInputElement

      emit('update:modelValue', target.value)
      handleChange(e)
    }

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
      onInputHandler
    }
  }
})
</script>

<style scoped>

</style>
