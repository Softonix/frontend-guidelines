class ChatService {
  async getUsers () {
    const { data, error } = await useSupabase().from(supabaseTablesNames.users).select()

    if (error) {
      throw error
    }

    return data as IUser[]
  }

  async getChats () {
    const { data, error } = await useSupabase().from(supabaseTablesNames.chats).select(`
    id,
    type,
    description,
    admin_id,
    messages ( id, message, created_at, sender_id ),
    users!chat_to_user (id, fullname, avatar_url)
    `)
    console.log(data)

    if (error) {
      throw error
    }

    return data
  }
// bfcdb3be-fe0b-4cdc-90bf-26a78650e3fd
// 9b2fa2a1-d9b3-4b18-b723-7c135f440b91
// kostya 2f156498-d95d-4ffd-8a92-305f6052f31d
//   const { data, error } = await supabase.from('countries').select(`
//   id,
//   name,
//   cities ( id, name )
// `)
}

export const chatService = new ChatService()
