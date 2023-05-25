<template>
  <router-link
    :to="{name: $routeNames.chatRoom, params: {
      id: contact.id
    }}"
  >
    <div class="flex gap-2 py-4">
      <div class="relative">
        <el-avatar :size="40" />

        <Badge :type="$badgeType.success" class="absolute border border-block-primary bottom-1 right-1" dot />
      </div>

      <div class="flex flex-col flex-1 truncate">
        <span class="font-semibold text-sm text-primary">{{ contact.fullname }}</span>

        <span
          class="font-normal text-sm
        text-secondary truncate"
        >{{ contact.msg.text }}</span>
      </div>

      <div class="flex flex-col items-end gap-1">
        <span class="font-normal text-xs text-tertiary">
          {{ new Intl.DateTimeFormat("en-Us", {
            hour: '2-digit',
            minute: '2-digit'

          }).format(new Date(contact.msg.sent_at)) }}
        </span>
        <Badge :type="$badgeType.primary">23</Badge>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import Badge from '@/components/Badge.vue'

defineProps<{
  contact: {
    id: string
    avatar_url: string
    fullname: string
    msg: {
      id: string
      text: string
      sent_at: string
    }
  }
}>()
</script>
