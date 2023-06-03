class ChatService {
  async getUsers () {
    const { data, error } = await useSupabase().from('users').select()

    if (error) {
      throw error
    }

    return data
  }

  async getChatsViews (userId: string) {
    const { data, error } = await useSupabase().rpc('get_chats', {
      current_user_id: userId
    })

    if (error) {
      throw error
    }

    return data
  }

  async getMessages (from: number, to: number, chatId: string) {
    const { data, error } = await useSupabase().from('messages').select(`
    id,
    chat_id,
    message,
    created_at,
    read,
    users(id, fullname, username, avatar_url)
    `
    ).eq('chat_id', chatId).order('created_at', { ascending: false }).range(from, to)

    if (error) {
      throw error
    }

    return data
  }

  onNewMessage (handler: (...args: any[]) => void) {
    useSupabase().channel(supabaseChannels.dbMessages).on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, async (payload) => {
      const { data, error } = await useSupabase().from('users').select().eq('id', payload.new.sender_id)

      if (error) {
        throw error
      }

      handler({
        ...payload.new,
        users: data[0]
      })
    }).subscribe()
  }

  async createNewMessage (message: IDatabase['public']['Tables']['messages']['Insert']) {
    const { data, error } = await useSupabase().from('messages').insert(message)

    if (error) {
      throw error
    }

    return data
  }

  onUpdateMessage (handler: (...args: any[]) => void) {
    useSupabase().channel(supabaseChannels.dbMessagesUpdate).on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages' }, payload => {
      handler(payload.new)
    }).subscribe()
  }

  async markMessageAsRead (messageId: string) {
    const { data, error } = await useSupabase().from('messages').update({
      read: true
    }).eq('id', messageId)

    if (error) {
      throw error
    }

    return data
  }

  async findChats (searchQuery: string, userId: string) {
    const { data, error } = await useSupabase().rpc('username_fullname_tagname', {
      search_query: searchQuery,
      user_id: userId
    })

    if (error) {
      throw error
    }

    return data
  }
}

export const chatService = new ChatService()
