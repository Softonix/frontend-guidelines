<template>
  <slot v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Compute',
  inheritAttrs: true
})
</script>
