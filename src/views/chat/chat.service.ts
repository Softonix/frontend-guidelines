import type { IDatabase } from '@/types/supabase'

class ChatService {
  async getUsers () {
    const { data, error } = await useSupabase().from('users').select()

    if (error) {
      throw error
    }

    return data
  }

  async getChats () {
    const { data, error } = await useSupabase().from('chats').select(`
    id,
    type,
    description,
    admin_id,
    created_at,
    messages ( id, message, created_at, sender_id, chat_id ),
    users!chat_to_user (id, fullname, avatar_url, username, tagname, bio)
    `)
    console.log(data)

    if (error) {
      throw error
    }

    return data
  }

  async getChatsViews (chatId: string) {
    const { data, error } = await useSupabase().from('chat_view').select().eq('user_id', chatId)
    console.log(data)

    if (error) {
      throw error
    }

    return data
  }

  async getMessages (from: number, to: number, chatId: string) {
    const { data, error } = await useSupabase().from('messages').select().eq('chat_id', chatId).range(from, to).order('created_at')

    if (error) {
      throw error
    }

    return data
  }

  onNewMessage (handler: (...args: any[]) => void) {
    useSupabase().channel(supabaseChannels.dbMessages).on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
      handler(payload.new)
    }).subscribe()
  }

  async createNewMessage (message: IDatabase['public']['Tables']['messages']['Insert']) {
    const { data, error } = await useSupabase().from('messages').insert(message)

    if (error) {
      throw error
    }

    return data
  }
  // chat d581646b-9cd7-4ef0-92d0-c7a628fe9a79
  // user1 9b2fa2a1-d9b3-4b18-b723-7c135f440b91
  // user2 d5c86d37-7adc-48b0-a6cd-fa8057d76550
}

export const chatService = new ChatService()
