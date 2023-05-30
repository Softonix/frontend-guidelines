import type { IDatabase } from '@/types/supabase'
import type { TChat, TTransformedChat } from './chat'
import { chatService } from './chat.service'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref<TChat[]>([])
  const messages = ref<IDatabase['public']['Tables']['messages']['Row'][]>([])
  const messagesCount = ref(0)
  const maxMessagesPerRequest = 200
  const authStore = useAuthStore()
  const { currentUser } = storeToRefs(authStore)

  const transformedChats = computed(() => {
    const blah = chats.value.reduce((prev, curr) => {
      prev[curr.id] = {
        ...curr,
        lastMessage: curr.messages[curr.messages.length - 1],
        unreadMessages: curr.messages.filter(msg =>
          !msg.read && msg.sender_id !== currentUser.value?.id).length
      }

      return prev
    }, {} as TTransformedChat)

    return blah
  })

  const contactData = computed(() => {
    return chats.value.filter((chat) => chat.users.some((user) => user.id === currentUser.value?.id)).map(chat => {
      const chatter = chat.users.find((user) => {
        return user.id !== currentUser.value?.id
      })

      const lastMessage = transformedChats.value[chat.id].lastMessage
      const unreadMessages = transformedChats.value[chat.id].unreadMessages

      return {
        id: chat.id,
        avatar_url: chatter?.avatar_url || '',
        fullname: chatter?.fullname,
        chatter_id: chatter?.id,
        msg: lastMessage
          ? {
            id: lastMessage.id,
            text: lastMessage.message,
            sent_at: lastMessage.created_at
          }
          : null,
        unreadMessages
      }
    })
  })

  async function loadMessageBatch (chatId: string) {
    const loadedMessages = await chatService.getMessages(0, maxMessagesPerRequest - 1, chatId)

    messages.value = [...loadedMessages]
  }

  async function getChats () {
    chats.value = await chatService.getChats()
  }

  function markAsRead (message: IDatabase['public']['Tables']['messages']['Row']) {
    const chatIndex = chats.value.findIndex(chat => chat.id === message.chat_id)

    const msgs = chats.value[chatIndex].messages.map(msg => msg.id === message.id
      ? {
        ...msg,
        read: true
      }
      : { ...msg })

    const chatInfo = {
      ...chats.value[chatIndex],
      messages: msgs
    }

    chats.value = [...chats.value.slice(0, chatIndex), chatInfo, ...chats.value.slice(chatIndex + 1)]
  }

  return {
    chats,
    transformedChats,
    contactData,
    messages,
    messagesCount,
    loadMessageBatch,
    getChats,
    markAsRead
  }
})
