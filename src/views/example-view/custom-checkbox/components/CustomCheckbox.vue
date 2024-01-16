<template>
  <Compute #default="{isChecked}" isChecked="[&:has(input:checked)]">
    <label
      v-bind="$attrs"
      :class="[
        'rounded-lg bg-white relative inline-block shadow-md overflow-hidden rounded-4xl cursor-pointer',
        `group ring-1 ring-gray-300 ${isChecked}:ring-primary`
      ]"
    >
      <input v-model="modelValue" class="hidden" type="checkbox" :value="value">
      <IconCheckFilled
        :class="[
          `transition-opacity opacity-0 group-${isChecked}:opacity-100`,
          'text-primary absolute right-1 top-1 z-10'
        ]"
      />

      <div class="bg-gray-200 border-b border-gray-300">
        <img :src="data.img" alt="checkbox-image">
      </div>

      <div class="p-4">
        <p class="font-bold">{{ data.title }}</p>
        <p class="text-gray-500">{{ data.description }}</p>
      </div>
    </label>
  </Compute>
</template>

<script lang="ts" setup>
defineOptions({ inheritAttrs: false })

defineProps<{
  value?: any
  data: {
    img: string
    title: string
    description: string
  }
}>()

const modelValue = defineModel<any>()
</script>
