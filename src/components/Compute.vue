<template>
  <slot v-bind="$props" />
</template>

<script lang="ts" setup generic="T">
defineProps<{
  data: T
}>()
</script>
