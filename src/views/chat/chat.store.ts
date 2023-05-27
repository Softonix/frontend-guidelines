import { chatService } from './chat.service'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref<any[]>([])
  const messages = ref([])
  const messagesCount = ref(0)
  const maxMessagesPerRequest = 100
  const authStore = useAuthStore()
  const { currentUser } = storeToRefs(authStore)

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

  const contactData = computed(() => {
    return chats.value.filter((chat) => chat.users.some((user) => user.id === currentUser.value?.id)).map(chat => {
      const chatter = chat.users.find((user) => {
        return user.id !== currentUser.value?.id
      })

      const lastMessage = transformedChats.value[chat.id].lastMessage

      return {
        id: chat.id,
        avatar_url: chatter.avatar_url || '',
        fullname: chatter.fullname,
        msg: lastMessage
          ? {
            id: lastMessage.id,
            text: lastMessage.message,
            sent_at: lastMessage.created_at
          }
          : null
      }
    })
  })

  watch(currentUser, async (currUser) => {
    if (currUser) {
      await getChats()
    }
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
    contactData,
    messages,
    messagesCount,
    loadMessageBatch,
    // getUsers,
    getChats
  }
})
