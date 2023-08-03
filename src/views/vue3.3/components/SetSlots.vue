<template>
  <div class="text-primary font-medium">
    <h2>Slots Component</h2>
    <slot :msg="'hi there'" />
    <h2>End of slot component</h2>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default?: (props: { msg: string }) => string
}>()
</script>
