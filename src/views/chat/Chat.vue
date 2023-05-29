<template>
  <div class="flex flex-col justify-items-center items-center pt-2 pb-2 md:pb-5 overflow-hidden h-full">
    <div class="overflow-y-auto no-scrollbar flex-1 w-full px-5 md:px-20 pb-5 flex flex-col gap-6">
      <Message
        v-for="message in messages" :key="message.id"
        :message="message"
        :currentUserMessage="currentUser?.id === message.sender_id"
      />
    </div>

    <div class="md:min-w-[320px] w-full pt-2 px-5 flex-shrink-0 pb-5">
      <MessageForm :chatId="chatId" :senderId="senderId" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'

const chatStore = useChatStore()
const authStore = useAuthStore()
const chatId = ref<string | null>(null)
const senderId = ref<string | null>(null)
const { currentUser } = storeToRefs(authStore)
const { messages, chats } = storeToRefs(chatStore)
const { loadMessageBatch } = chatStore

const route = useRoute()

onMounted(async () => {
  const chatIdParam = route.params.id as string

  if (chatIdParam) {
    chatId.value = chatIdParam

    if (currentUser.value?.id) {
      senderId.value = currentUser.value?.id
    }

    await loadMessageBatch(chatIdParam as string)

    await chatService.onNewMessage((newMessage) => {
      messages.value = [...messages.value, newMessage]
    })
  }
})

watch(() => route.params, async (currParams, prevParams) => {
  const chatIdParam = route.params.id as string

  if (chatIdParam && chatIdParam !== prevParams.id) {
    chatId.value = chatIdParam

    if (currentUser.value?.id) {
      senderId.value = currentUser.value?.id
    }

    await loadMessageBatch(chatIdParam)

    await chatService.onNewMessage((newMessage) => {
      messages.value = [...messages.value, newMessage]
      const chatIndex = chats.value.findIndex((ch) => ch.id === chatIdParam)
      const ch = { ...chats.value[chatIndex] }
      ch.messages = [...ch.messages, newMessage]

      const copy = [...chats.value]
      copy.splice(chatIndex, 1)
      chats.value = [ch, ...copy]
    })
  }
})
</script>
