<template>
  <div
    class="flex items-center justify-center
        rounded-full bg-block-3 font-semibold
        text-white text-xs"
    :class="[dot ? 'box-content p-0 w-2 h-2' : 'px-[6px]', type]"
  >
    <slot v-if="!dot" />
  </div>
</template>

<script lang="ts" setup>
import { EBadgeType } from '@/types/enums'

withDefaults(defineProps<{
  type?: EBadgeType
  dot?: boolean
}>(), {
  type: EBadgeType.primary
})
</script>
