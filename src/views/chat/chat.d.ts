type TGetMessagesDataType = TArrayElement<Awaited<ReturnType<typeof chatService.getMessages>>>

interface IMessage extends TGetMessagesDataType {
  users: TArrayElement<TGetMessagesDataType['users']>
}

type TChatData = Awaited<ReturnType<typeof chatService.getChatsViews>>
