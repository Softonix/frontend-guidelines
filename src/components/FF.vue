<template>
  <component :is="component" v-if="isVisible" :value="badgeLabel">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { TFlagName } from '@/composables/flags'

const { flags } = useFlags()

const props = withDefaults(defineProps<{
  name: TFlagName
  showBadge: boolean
  badgeLabel?: string
}>(), {
  badgeLabel: 'new'
})

const component = computed(() => props.showBadge ? ElBadge : 'div')

const isVisible = computed(() => flags[props.name])
</script>
