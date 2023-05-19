<template>
  <div
    class="flex items-center justify-center
       px-[6px] py-[2px] rounded-full bg-block-3 font-semibold
        text-white text-xs"
    :class="[dot ? 'py-[6px]' : 'py-[2px]', variant === 'primary' ? 'bg-system-info' : 'bg-block-3']"
  >
    <slot v-if="!dot" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  variant: 'primary' | 'secondary'
  dot?: boolean
}>()
</script>
