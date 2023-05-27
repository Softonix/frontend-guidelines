<template>
  <el-form
    ref="sendMessageFormRef"
    :model="sendMessageModel"
    :rules="sendMessageRules"
    class="md:border border-border-primary rounded-xl flex md:flex-col w-full"
    @submit.prevent="submitMessage(sendMessageFormRef)"
  >
    <el-form-item class="flex-1 m-0" prop="message">
      <el-input v-model="sendMessageModel.message" placeholder="Write a message" />
    </el-form-item>

    <div class="flex justify-end md:flex-1 md:p-3">
      <el-button
        :type="$elComponentType.primary"
        @click="submitMessage(sendMessageFormRef)"
      >
        Send
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
const props = defineProps<{
  chat_id: string
  sender_id: string
}>()

const sendMessageFormRef = useElFormRef()
const sendMessageModel = useElFormModel({
  chat_id: props.chat_id,
  sender_id: props.sender_id,
  message: ''
})
const sendMessageRules = useElFormRules({
  message: [useRequiredRule()]
})

async function sendMessage () {
  console.log(sendMessageModel)
  chatService.createNewMessage({
    ...sendMessageModel,
    chat_id: props.chat_id,
    sender_id: props.sender_id
  })
}

function submitMessage (formRef) {
  formRef.validate(async (valid) => {
    if (valid) {
      await sendMessage()
      sendMessageModel.message = ''
    }
  })
}
</script>
