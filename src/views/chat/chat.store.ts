import { chatService } from './chat.service'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref<any[]>([])
  const messages = ref([])
  const messagesCount = ref(0)
  const maxMessagesPerRequest = 100

  const transformedChats = computed(() => {
    const blah = chats.value.reduce((prev, curr) => {
      prev[curr.id] = {
        ...curr,
        lastMessage: curr.messages[curr.messages.length - 1]
      }

      return prev
    }, {})

    return blah
  })

  async function loadMessageBatch (chatId: string) {
    const loadedMessages = await chatService.getMessages(0, maxMessagesPerRequest - 1, chatId)

    messages.value = [...loadedMessages]
  }

  async function getChats () {
    chats.value = await chatService.getChats()
  }

  return {
    chats,
    transformedChats,
    messages,
    messagesCount,
    loadMessageBatch,
    // getUsers,
    getChats
  }
})
