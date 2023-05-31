<template>
  <div
    class="flex flex-col justify-items-center items-center pt-2 pb-2 md:pb-5 overflow-hidden h-full"
  >
    <div class="overflow-y-auto no-scrollbar flex-1 w-full px-5 md:px-20 pb-5 flex flex-col gap-6">
      <Message
        v-for="message in messages"
        :key="message.id" :message="message"
        :currentUserMessage="currentUser?.id === message.users?.id"
        :last="message.id === messages[messages.length-1].id"
        @onMessageRead="markAsRead"
      />
    </div>

    <div class="md:min-w-[320px] w-full pt-2 px-5 flex-shrink-0 pb-5">
      <MessageForm
        :chatId="($route.params.id as string)"
        :senderId="currentUser?.id || null"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'
import { chatRoomGuard } from './chat.routes'

const chatStore = useChatStore()
const authStore = useAuthStore()

const { markAsRead } = chatStore

const { currentUser } = storeToRefs(authStore)
const { messages } = storeToRefs(chatStore)

onBeforeRouteUpdate(chatRoomGuard)
</script>
