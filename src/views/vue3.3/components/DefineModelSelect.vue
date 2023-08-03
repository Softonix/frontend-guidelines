<template>
  <p class="text-primary font-semibold my-2">Please Choose College</p>
  <!-- OLD SYNTAX -->
  <el-select
    :model-value="modelValue"
    :placeholder="placeholder"
    :suffix-icon="IconArrowSmall"
    class="w-1/3"
    @change="$emit('update:modelValue', $event)"
  >
    <el-option
      v-for="(option, index) in options"
      :key="index"
      :label="option"
      :value="option"
    >
      <slot name="option" :option="option" />
    </el-option>
  </el-select>

  <!-- NEW SYNTAX -->
  <!-- <el-select
    v-model="modelValue"
    :placeholder="placeholder"
    :suffix-icon="IconArrowSmall"
    class="w-1/3"
  >
    <el-option
      v-for="(option, index) in options"
      :key="index"
      :label="option"
      :value="option"
    >
      <slot name="option" :option="option" />
    </el-option>
  </el-select> -->
</template>

<script lang="ts" setup>
import IconArrowSmall from '~icons/icon/arrow-small'

// OLD SYNTAX

defineProps<{
  options: string[]
  modelValue: any
  placeholder?: string
}>()

defineEmits(['update:modelValue'])

// NEW SYNTAX
// defineProps<{
//   options: string[]
//   placeholder?: string
// }>()

// const modelValue = defineModel<string>({ required: true })
</script>
