import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseClient = createClient<IDatabase>(supabaseUrl, supabaseAnonKey)

export const supabaseChannels = {
  onlineUsers: 'online-users',
  dbMessages: 'db-messages',
  dbMessagesUpdate: 'db-messages-update'
}

export const useSupabase = () => supabaseClient
