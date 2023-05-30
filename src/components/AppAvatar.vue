<template>
  <div class="relative">
    <el-avatar :size="size" :src="src">
      {{ createInitials(fullname) }}
    </el-avatar>

    <Badge
      v-if="online"
      :type="$badgeType.success" class="absolute border border-block-primary bottom-1 right-1" dot
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  size: number
  fullname?: string | null
  online: boolean
}>()

function createInitials (fullname?: string | null) {
  if (!fullname) {
    return ''
  }

  return fullname?.split(' ').map(str => str.charAt(0)).join('')
}
</script>
