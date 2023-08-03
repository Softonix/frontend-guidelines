<template>
  <!-- OLD SYNTAX -->
  <DefineModelSelect
    :model-value="modelValue"
    :options="options"
    class="w-full"
    placeholder="Select college"
    @update:modelValue="$emit('update:modelValue', $event)"
  />

  <!-- NEW SYNTAX -->
  <!-- <DefineModelSelect
    v-model="modelValue"
    :options="options"
    class="w-full"
    placeholder="Select college"
  /> -->
</template>

<script lang="ts" setup>
const options = [
  'The Royal Australasian College of Physicians',
  'The Australian College of Rural and Remote Medicine',
  'The Australian College of Nurse Practitioners',
  'Australian Pharmacy Council',
  'Pharmaceutical Society of Australia',
  'Australian Association of Consultant Pharmacists'
]

// OLD SYNTAX
defineProps<{
  modelValue: string | null
}>()

defineEmits(['update:modelValue'])

// NEW SYNTAX
// const modelValue = defineModel<string>({ required: true })
</script>
