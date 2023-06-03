<template>
  <div
    v-loading="messagesLoading"
    class="flex flex-col justify-items-center items-center pt-2 pb-2 md:pb-5 overflow-hidden h-full"
  >
    <div
      ref="messagesList"
      class="overflow-y-auto no-scrollbar flex-1 w-full px-5 md:px-20 pb-5 flex flex-col gap-6"
    >
      <div v-loading="messagesBatchLoading" />
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
import { routeNames } from '@/router/route-names'

import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'

const route = useRoute()

const authStore = useAuthStore()
const chatStore = useChatStore()

const messagesLoading = ref(false)
const messagesBatchLoading = ref(false)

const { currentUser } = storeToRefs(authStore)
const { messages, lastReadMessage, chats, chatsLoading } = storeToRefs(chatStore)

const { loadMessageBatch, getChats } = chatStore

const router = useRouter()

const messagesList = ref<HTMLDivElement | null>(null)

useInfiniteScroll(messagesList, async () => {
  const chatId = route.params.id as string
  if (chatId && !messagesLoading.value) {
    messagesBatchLoading.value = true
    await loadMessageBatch(chatId)
    messagesBatchLoading.value = false
  }
}, { distance: 10, direction: 'top', preserveScrollPosition: true })

watch(currentUser, async () => {
  try {
    chatsLoading.value = true
    const fetchedChats = await getChats()

    if (fetchedChats?.length) {
      router.replace({
        name: routeNames.chatRoom,
        params: {
          id: fetchedChats[0].chat_id
        }
      })
    }
  } catch (err) {
    console.log(err)
  } finally {
    chatsLoading.value = false
  }
}, { immediate: true })

function markAsRead (message: IDatabase['public']['Tables']['messages']['Row']) {
  const chatIndex = chats.value.findIndex(chat => chat.chat_id === message.chat_id)

  if (chatIndex !== -1) {
    const copy = { ...chats.value[chatIndex] }
    copy.unread_messages_count = copy.unread_messages_count ? copy.unread_messages_count - 1 : 0

    chats.value = [...chats.value.slice(0, chatIndex), copy, ...chats.value.slice(chatIndex + 1)]
  }
}

function addMessage (newMessage: IMessage, chatId: string) {
  if (chatId === newMessage.chat_id) {
    messages.value = [...messages.value, { ...newMessage, read: false }]
  }

  const chatIndex = chats.value.findIndex((ch) => ch.chat_id === newMessage.chat_id)

  if (chatIndex !== -1) {
    const ch = { ...chats.value[chatIndex] }
    ch.message = newMessage.message
    ch.message_created_at = newMessage.created_at
    ch.message_id = newMessage.id

    if (currentUser.value?.id !== newMessage.users.id) {
      ch.unread_messages_count = ch.unread_messages_count
        ? ch.unread_messages_count + 1
        : 1
    }

    const copy = [...chats.value]

    copy.splice(chatIndex, 1)
    chats.value = [ch, ...copy]
  }
}

watch(route, async (route) => {
  const chatId = route.params.id as string
  messages.value = []

  if (chatId) {
    try {
      messagesLoading.value = true
      await loadMessageBatch(chatId)
    } catch (err) {
      console.log(err)
    } finally {
      messagesLoading.value = false
    }

    chatService.onNewMessage((newMessage) => {
      addMessage(newMessage, chatId)
    })

    chatService.onUpdateMessage((updatedMessage) => {
      markAsRead(updatedMessage)
    })
  }
}, { immediate: true })
</script>
