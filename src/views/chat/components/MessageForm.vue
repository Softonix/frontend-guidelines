<template>
  <el-form
    ref="sendMessageFormRef"
    :model="sendMessageModel"
    :rules="sendMessageRules"
    :show-message="false"
    class="md:border border-border-primary rounded-xl flex md:flex-col w-full"
  >
    <el-form-item
      ref="messageInputRef"
      class="flex-1 m-0" prop="message"
    >
      <el-input v-model="sendMessageModel.message" placeholder="Write a message" />
    </el-form-item>

    <div class="flex justify-end md:flex-1 md:p-3">
      <el-button
        :type="$elComponentType.primary"
        @click="submitMessage(sendMessageFormRef, messageInputRef)"
      >
        Send
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
const props = defineProps<{
  chatId: string
  senderId: string
}>()

const sendMessageFormRef = useElFormRef()
const sendMessageModel = useElFormModel({
  chat_id: props.chatId,
  sender_id: props.senderId,
  message: ''
})
const sendMessageRules = useElFormRules({
  message: [useRequiredRule()]
})

const messageInputRef = ref(null)

async function sendMessage () {
  chatService.createNewMessage({
    message: sendMessageModel.message,
    chat_id: props.chatId,
    sender_id: props.senderId
  })
}

function submitMessage (formRef, inputRef) {
  formRef.validate(async (valid) => {
    if (valid) {
      await sendMessage()
      inputRef.resetField()
    }
  })
}
</script>
