type TJson =
  | string
  | number
  | boolean
  | null
  | { [key: string]: TJson }
  | TJson[]

interface IDatabase {
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
          unread_messages_count: number | null
          updated_at: string | null
          user_id: string | null
          username: string | null
        }
      }
      chats_view: {
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
          unread_messages_count: number | null
          updated_at: string | null
          user_id: string | null
          username: string | null
        }
      }
    }
    Functions: {
      get_chats: {
        Args: {
          current_user_id: string
        }
        Returns: {
          chat_id: string
          chat_created_at: string
          type: string
          description: string
          updated_at: string
          message_id: string
          message_created_at: string
          message: string
          user_id: string
          bio: string
          fullname: string
          tagname: string
          username: string
          avatar_url: string
          unread_messages_count: number
        }[]
      }
      helper: {
        Args: {
          current_user_id: string
        }
        Returns: {
          chat_id: string
          chat_created_at: string
          type: string
          description: string
          updated_at: string
          message_id: string
          message_created_at: string
          message: string
          user_id: string
          bio: string
          fullname: string
          tagname: string
          username: string
          avatar_url: string
          unread_messages_count: number
        }[]
      }
      username_fullname_tagname:
      | {
        Args: {
          '': unknown
        }
        Returns: string
      }
      | {
        Args: {
          user_id: string
        }
        Returns: string
      }
      | {
        Args: {
          search_query: string
          user_id: string
        }
        Returns: {
          chat_id: string
          chat_created_at: string
          type: string
          description: string
          updated_at: string
          message_id: string
          message_created_at: string
          message: string
          user_id: string
          bio: string
          fullname: string
          tagname: string
          username: string
          avatar_url: string
          unread_messages_count: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
