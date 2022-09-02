<template>
  <div :id="name" />
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
