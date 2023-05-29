<template>
  <router-link
    :to="{name: $routeNames.chatRoom, params: {
      id: contact.id
    }}"
  >
    <div
      class="flex gap-2 py-4 relative
      hover:after:absolute
      hover:after:top-0 hover:after:left-0
      hover:after:content-[''] hover:after:bg-block-3
      hover:after:bg-opacity-20 hover:after:w-screen hover:after:h-full px-6"
    >
      <div class="relative">
        <el-avatar :size="40" />

        <Badge :type="$badgeType.success" class="absolute border border-block-primary bottom-1 right-1" dot />
      </div>

      <div class="flex flex-col flex-1 truncate">
        <span class="font-semibold text-sm text-primary truncate">{{ contact.fullname }}</span>

        <span
          class="font-normal text-sm
        text-secondary truncate"
        >{{ contact.msg ? contact.msg.text : '' }}</span>
      </div>

      <div class="flex flex-col items-end gap-1">
        <span class="font-normal text-xs text-tertiary">
          {{ contact.msg?.sent_at ? new Intl.DateTimeFormat("en-Us", {
            hour: '2-digit',
            minute: '2-digit'

          }).format(new Date(contact.msg.sent_at)) : '' }}
        </span>
        <Badge :type="$badgeType.primary">23</Badge>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import Badge from '@/components/Badge.vue'
import type { TContact } from '@/views/chat/chat'

defineProps<{
  contact: TContact
}>()
</script>
