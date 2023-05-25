interface IUser {
  id: string
  bio: string
  fullname: string
  tagname: string
  username: string
  avatar_url: string
}

interface IMessage {
  id: string
  created_at: string
  sender_id: string
  chat_id: string
  message: string
}

interface IChat {
  id: string
  created_at: string
  admin_id: string
  type: 'chat' | 'group'
  description: string
}
