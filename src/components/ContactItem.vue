<template>
  <router-link
    :to="{name: $routeNames.chatRoom, params: {
      id: chat.chat_id
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
      <AppAvatar :size="40" :online="online" :src="chat.avatar_url ?? ''" :fullname="chat.fullname" />

      <div class="flex flex-col flex-1 truncate">
        <span class="font-semibold text-sm text-primary truncate">{{ chat.fullname }}</span>

        <span
          class="font-normal text-sm
        text-secondary truncate"
        >{{ chat.message }}</span>
      </div>

      <div class="flex flex-col items-end gap-1">
        <span class="font-normal text-xs text-tertiary">
          {{ chat.message_created_at ? new Intl.DateTimeFormat("en-Us", {
            hour: '2-digit',
            minute: '2-digit'

          }).format(new Date(chat.message_created_at)) : '' }}
        </span>
        <Badge
          v-if="chat.unread_messages_count"
          :type="$badgeType.primary"
          :dot="chat.unread_messages_count === 1"
        >
          {{ chat.unread_messages_count }}
        </Badge>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import type { IDatabase } from '@/types/supabase'

import Badge from '@/components/Badge.vue'

defineProps<{
  chat: IDatabase['public']['Views']['chat_view']['Row']
  open: boolean
  online: boolean
}>()
</script>
