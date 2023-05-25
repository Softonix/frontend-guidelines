import { chatService } from './chat.service'

export const useChatStore = defineStore('chatStore', () => {
  const users = ref<IUser[]>([])

  async function getUsers () {
    users.value = await chatService.getUsers()
  }

  return {
    users,
    getUsers
  }
})
