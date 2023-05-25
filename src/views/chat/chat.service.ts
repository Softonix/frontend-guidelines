class ChatService {
  async getUsers () {
    const { data, error } = await useSupabase().from('users').select()

    if (error) {
      throw error
    }

    return data
  }
}

export const chatService = new ChatService()
