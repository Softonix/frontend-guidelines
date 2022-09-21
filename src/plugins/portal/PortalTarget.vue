<template>
  <div :id="name">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { TRenderPortals } from './index'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const renderPortals = inject('renderPortals') as TRenderPortals

onMounted(() => renderPortals(props.name))
</script>
