<template>
  <el-form
    ref="sendMessageFormRef"
    :model="sendMessageModel"
    class="md:border border-border-primary rounded-xl flex md:flex-col w-full md:pt-2 gap-2 md:gap-0"
    @submit.prevent
  >
    <el-form-item
      ref="messageInputRef"
      class="flex-1 m-0" prop="message"
    >
      <el-input v-model="sendMessageModel.message" class="message-input" placeholder="Write a message" />
    </el-form-item>

    <div class="flex justify-end md:flex-1 md:p-3 bg-block-secondary md:rounded-xl">
      <el-button
        :type="$elComponentType.primary"
        :disabled="!isValid"
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

const messageInputRef = ref(null)

const sendMessageFormRef = useElFormRef()
const sendMessageModel = useElFormModel({
  message: ''
})

const isValid = computed(() =>
  !!sendMessageModel.message.trim().length
)

async function sendMessage () {
  chatService.createNewMessage({
    message: sendMessageModel.message,
    chat_id: props.chatId,
    sender_id: props.senderId
  })
}

async function submitMessage (formRef, inputRef) {
  if (isValid.value) {
    await sendMessage()
    inputRef.resetField()
  }
}
</script>

<style lang="scss">
.message-input {
  @apply md:rounded-t-xl;

  .el-input__wrapper {
    @apply md:shadow-none md:border-b md:rounded-none  md:pb-2;
  }
}
</style>
