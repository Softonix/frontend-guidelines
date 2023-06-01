import type { IDatabase } from '@/types/supabase'
import { chatService } from './chat.service'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref<IDatabase['public']['Views']['chat_view']['Row'][]>([])
  const messages = ref<IMessage[]>([])
  const maxMessagesPerRequest = 500

  const lastReadMessage = computed(() => {
    const lastReadIndex = messages.value.findIndex(
      (message, index) => messages.value[index - 1]?.read && !message.read) - 1

    return messages.value[lastReadIndex]
  })

  const authStore = useAuthStore()
  const { currentUser } = storeToRefs(authStore)

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

  return {
    chats,
    messages,
    lastReadMessage,
    loadMessageBatch,
    getChats
  }
})
