import type { IDatabase } from '@/types/supabase'

type TChat = IDatabase['public']['Tables']['chats']['Row'] & {
  messages: IDatabase['public']['Tables']['messages']['Row'][]
  users: IDatabase['public']['Tables']['users']['Row'][]
}

type TTransformedChat = {
  [key: string]: TChat & {
    lastMessage: IDatabase['public']['Tables']['messages']['Row']
  }
}

type TContact = {
  id: string
  avatar_url: string
  fullname: string | null | undefined
  chatter_id: string | undefined
  msg: {
    id: string
    text: string
    sent_at: string | null
  } | null
}
