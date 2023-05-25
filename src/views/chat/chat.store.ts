import { chatService } from './chat.service'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref<any[]>([])

  // async function getUsers () {
  //   users.value = await chatService.getUsers()
  // }

  async function getChats () {
    chats.value = await chatService.getChats()
  }

  return {
    chats,
    // getUsers,
    getChats
  }
})
