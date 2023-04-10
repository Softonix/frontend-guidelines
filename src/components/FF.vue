<template>
  <component :is="component" v-if="isVisible" value="FF">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { ElBadge } from 'element-plus'
import type { TFlagName } from '@/composables/flags'

const { flags } = useFlags()

const props = defineProps<{
  name: TFlagName
  showBadge: boolean
}>()

const component = computed(() => props.showBadge ? ElBadge : 'div')

const isVisible = computed(() => flags[props.name])
</script>
