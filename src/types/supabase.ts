export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      chat_to_user: {
        Row: {
          chat_id: string
          created_at: string
          user_id: string
        }
        Insert: {
          chat_id: string
          created_at?: string
          user_id: string
        }
        Update: {
          chat_id?: string
          created_at?: string
          user_id?: string
        }
      }
      chats: {
        Row: {
          admin_id: string | null
          created_at: string
          description: string | null
          id: string
          type: string
          updated_at: string
        }
        Insert: {
          admin_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          type?: string
          updated_at?: string
        }
        Update: {
          admin_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          type?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          chat_id: string
          created_at: string
          id: string
          message: string
          read: boolean
          sender_id: string
        }
        Insert: {
          chat_id: string
          created_at?: string
          id?: string
          message?: string
          read?: boolean
          sender_id: string
        }
        Update: {
          chat_id?: string
          created_at?: string
          id?: string
          message?: string
          read?: boolean
          sender_id?: string
        }
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          fullname: string
          id: string
          tagname: string
          username: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          fullname: string
          id: string
          tagname: string
          username: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          fullname?: string
          id?: string
          tagname?: string
          username?: string
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
