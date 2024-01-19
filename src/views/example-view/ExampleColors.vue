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
import { colors } from '@colors'

const transformColors = (obj: any, prefix = ''): { name: string; color: string }[] => {
  return Object.entries(obj).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}-${key}` : key

    if (typeof value === 'string') {
      return [{ name, color: value }]
    } else if (typeof value === 'object' && value !== null) {
      return transformColors(value, name)
    } else {
      return []
    }
  })
}

const transformedColors = transformColors(colors)
</script>

<style scoped lang="scss">
.colors-wrapper {
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
</style>
