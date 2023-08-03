<template>
  <div class="grid grid-cols-5 gap-x-4 text-sm text-primary">
    <div
      v-for="item in items"
      :key="item.id"
    >
      <slot :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends { id: number }">
defineProps<{
  items: T[]
}>()
</script>
