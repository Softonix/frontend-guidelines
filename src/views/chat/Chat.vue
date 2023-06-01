<template>
  <div
    class="flex flex-col justify-items-center items-center pt-2 pb-2 md:pb-5 overflow-hidden h-full"
  >
    <div
      ref="messageListRef"
      class="overflow-y-auto no-scrollbar flex-1 w-full px-5 md:px-20 pb-5 flex flex-col gap-6"
    >
      <Message
        v-for="message in messages"
        :key="message.id" :message="message"
        :currentUserMessage="currentUser?.id === message.users.id"
        :last="message.id === messages[messages.length-1].id"
        :lastRead="message.id === lastReadMessage?.id"
        @onMessageRead="markAsRead"
      />
    </div>

    <div class="md:min-w-[320px] w-full pt-2 px-5 flex-shrink-0 pb-5">
      <MessageForm
        :chatId="($route.params.id as string)"
        :senderId="(currentUser?.id as string)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'

const messageListRef = ref<HTMLDivElement | null>(null)

const route = useRoute()

const authStore = useAuthStore()
const chatStore = useChatStore()

const { currentUser } = storeToRefs(authStore)
const { messages, lastReadMessage } = storeToRefs(chatStore)

const { markAsRead, loadMessageBatch, addMessage } = chatStore

watch(route, async (route) => {
  const chatId = route.params.id as string
  if (chatId) {
    await loadMessageBatch(chatId)

    chatService.onNewMessage((newMessage) => {
      addMessage(newMessage, chatId)
    })

    chatService.onUpdateMessage((updatedMessage) => {
      markAsRead(updatedMessage)
    })
  }
}, { immediate: true })
</script>
