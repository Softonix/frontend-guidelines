<template>
  <div class="flex flex-col justify-items-center items-center pt-2 pb-2 md:pb-5 overflow-hidden h-full">
    <div class="overflow-y-auto no-scrollbar flex-1 w-full px-5 md:px-20 pb-5 flex flex-col gap-6">
      <Message
        v-for="message in messages" :key="message.id"
        :message="message"
        :currentUserMessage="currentUser.id === message.sender_id"
      />
    </div>

    <div class="md:min-w-[320px] w-full pt-2 px-5 flex-shrink-0 pb-5">
      <MessageForm :chat_id="chatID" :sender_id="senderId" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'

const chatStore = useChatStore()
const authStore = useAuthStore()
const chatID = ref(null)
const senderId = ref(null)
const { currentUser } = storeToRefs(authStore)
const { messages, messagesCount, chats, transformedChats } = storeToRefs(chatStore)
const { loadMessageBatch } = chatStore

const route = useRoute()

onMounted(async () => {
  const chatId = route.params.id

  if (chatId) {
    chatID.value = chatId
    senderId.value = currentUser.value?.id

    await loadMessageBatch(chatId as string)

    await chatService.onNewMessage((newMessage) => {
      messages.value = [...messages.value, newMessage]
    })
  }
})

watch(() => route.params, async (currParams, prevParams) => {
  const chatId = currParams.id

  if (chatId && chatId !== prevParams.id) {
    chatID.value = chatId
    senderId.value = currentUser.value?.id

    await loadMessageBatch(chatId as string)

    await chatService.onNewMessage((newMessage) => {
      messages.value = [...messages.value, newMessage]
      const chatIndex = chats.value.findIndex((ch) => ch.id === chatId)
      const ch = { ...chats.value[chatIndex] }
      ch.messages = [...ch.messages, newMessage]
      console.log('CH')
      console.log(ch)
      const copy = [...chats.value]
      copy.splice(chatIndex, 1)
      chats.value = [ch, ...copy]
      // TODO: Reflect last message in left sidebar
    })
  }
})
</script>
