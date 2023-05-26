import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

export const supabaseTablesNames = {
  chat_to_user: 'chat_to_user',
  chats: 'chats',
  messages: 'messages',
  users: 'users'
}

export const supabaseChannels = {
  onlineUsers: 'online-users',
  dbMessages: 'db-messages'
}

export const useSupabase = () => supabaseClient
