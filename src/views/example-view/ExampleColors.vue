<template>
  <div class="colors-wrapper grid gap-4">
    <div
      v-for="c in transformedColors"
      :key="c.name"
      data-testid="color-block" class="pb-[100%]"
      :style="{ 'background': c.color}"
    />
  </div>
</template>

<script setup lang="ts">
import colors from 'colors'

const transformColors = (c: typeof colors): { name: string; color: string}[] => {
  return Object.entries(c).flatMap(([key, value]) => {
    return typeof value === 'string' ? { name: key, color: value } : transformColors(value)
  })
}

const transformedColors = transformColors(colors)
</script>

<style lang="scss">
.colors-wrapper {
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
</style>
