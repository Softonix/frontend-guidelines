export type TJson =
  | string
  | number
  | boolean
  | null
  | { [key: string]: TJson }
  | TJson[]

export interface IDatabase {
  public: {
    Tables: {
      chat_to_user: {
        Row: {
          chat_id: string
          created_at: string | null
          user_id: string
        }
        Insert: {
          chat_id: string
          created_at?: string | null
          user_id: string
        }
        Update: {
          chat_id?: string
          created_at?: string | null
          user_id?: string
        }
      }
      chats: {
        Row: {
          admin_id: string | null
          created_at: string | null
          description: string | null
          id: string
          type: string
        }
        Insert: {
          admin_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          type?: string
        }
        Update: {
          admin_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          type?: string
        }
      }
      messages: {
        Row: {
          chat_id: string | null
          created_at: string | null
          id: string
          message: string
          sender_id: string | null
        }
        Insert: {
          chat_id?: string | null
          created_at?: string | null
          id?: string
          message: string
          sender_id?: string | null
        }
        Update: {
          chat_id?: string | null
          created_at?: string | null
          id?: string
          message?: string
          sender_id?: string | null
        }
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          fullname: string | null
          id: string
          tagname: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          fullname?: string | null
          id: string
          tagname?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          fullname?: string | null
          id?: string
          tagname?: string | null
          username?: string | null
        }
      }
    }
    Views: {
      chat_view: {
        Row: {
          avatar_url: string | null
          bio: string | null
          chat_created_at: string | null
          chat_id: string | null
          description: string | null
          fullname: string | null
          message: string | null
          message_created_at: string | null
          message_id: string | null
          tagname: string | null
          type: string | null
          user_id: string | null
          username: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
