<template>
  <div class="flex gap-2 py-4">
    <div class="relative">
      <el-avatar :size="40" />
      <div class="absolute w-2 h-2 rounded-full border border-block-primary bg-system-success bottom-1 right-1" />
    </div>
    <div class="flex flex-col flex-1 truncate">
      <span class="font-semibold text-sm text-primary">Zack Fox</span>
      <span
        class="font-normal text-sm
        text-secondary truncate"
      >Have you ever heard of that thing, I've done yesterday</span>
    </div>
    <div class="flex flex-col items-end gap-1">
      <span class="font-normal text-xs text-tertiary">10:49 AM</span>
      <Badge variant="primary">23</Badge>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Badge from '@/components/Badge.vue'
</script>
