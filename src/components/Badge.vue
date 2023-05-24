<template>
  <div
    class="flex items-center justify-center
        rounded-full bg-block-3 font-semibold
        text-white text-xs"
    :class="[dot ? 'box-content p-0 w-2 h-2' : 'px-[6px]', variant === 'primary' ? 'bg-system-info' : 'bg-block-3']"
  >
    <slot v-if="!dot" />
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  dot?: boolean
}>(), {
  variant: 'primary'
})
</script>
