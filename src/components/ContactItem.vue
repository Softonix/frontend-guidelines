<template>
  <router-link
    :to="{name: $routeNames.chatRoom, params: {
      id: contact.id
    }}"
  >
    <div
      class="flex gap-2 py-4 relative
      after:absolute
      after:top-0 after:left-0
      after:content-[''] hover:after:bg-block-3
      hover:after:bg-opacity-20 after:w-screen after:h-full px-6"
      :class="{['after:bg-block-3 after:bg-opacity-30']:open}"
    >
      <AppAvatar :size="40" :online="online" :src="contact.avatar_url" :fullname="contact.fullname" />

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
        <Badge v-if="unreadMessages" :type="$badgeType.primary" :dot="unreadMessages === 1">{{ unreadMessages }}</Badge>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import Badge from '@/components/Badge.vue'
import type { TContact } from '@/views/chat/chat'

defineProps<{
  contact: TContact
  open: boolean
  online: boolean
  unreadMessages: number
}>()
</script>
