import type { IDatabase } from '@/types/supabase'
import { chatService } from './chat.service'
import { routeNames } from '@/router/route-names'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref<IDatabase['public']['Views']['chat_view']['Row'][]>([])
  const messages = ref<IMessage[]>([])
  const maxMessagesPerRequest = 500

  const authStore = useAuthStore()
  const { currentUser } = storeToRefs(authStore)

  const router = useRouter()

  watch(currentUser, async () => {
    const fetchedChats = await getChats()

    if (fetchedChats?.length) {
      router.replace({
        name: routeNames.chatRoom,
        params: {
          id: fetchedChats[0].chat_id
        }
      })
    }
  })

  async function loadMessageBatch (chatId: string) {
    messages.value = (await chatService.getMessages(0, maxMessagesPerRequest - 1, chatId)) as unknown as IMessage[]
  }

  async function getChats () {
    if (currentUser.value) {
      const fetchedChats = await chatService.getChatsViews(currentUser.value.id)

      chats.value = [...fetchedChats]

      return fetchedChats
    }
  }

  function markAsRead (message: IDatabase['public']['Tables']['messages']['Row']) {
    const chatIndex = chats.value.findIndex(chat => chat.chat_id === message.chat_id)

    if (chatIndex) {
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

  return {
    chats,
    messages,
    loadMessageBatch,
    getChats,
    markAsRead,
    addMessage
  }
})
