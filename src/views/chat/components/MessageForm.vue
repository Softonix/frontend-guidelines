<template>
  <div
    v-show="cameraActive"
    class="absolute top-20 rounded-3xl overflow-hidden md:left-1/2 md:-translate-x-1/2 left-5 right-5"
  >
    <Camera
      ref="webcamRef" :resolution="{
        width: 640,
        height: 480
      }" :autoplay="false" facingMode="user" @started="onCameraStarted"
      @stopped="onCameraStopped"
    >
      <div class="flex gap-5 h-full justify-center items-end z-[999] p-5 relative">
        <el-button @click="toggleCamera">
          Stop Camera
        </el-button>
        <el-button @click="sendMessageModel.message=signLanguageMessage">
          Save to input
        </el-button>
        <el-button @click="flip">
          Flip
        </el-button>
      </div>

      <canvas ref="canvasRef" class="w-full h-full absolute left-0 right-0 top-0" />
    </Camera>
  </div>
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

    <div class="flex justify-end md:flex-1 md:p-3 bg-block-secondary md:rounded-xl gap-1">
      <el-button
        :type="$elComponentType.primary"
        :disabled="!isValid"
        @click="submitMessage(sendMessageFormRef, messageInputRef)"
      >
        Send
      </el-button>
      <el-button v-if="!cameraActive" @click="toggleCamera">SLD</el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import Camera from 'simple-vue-camera'

const modelUrl = 'https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json'

const {
  webcamRef,
  canvasRef,
  cameraActive,
  signLanguageMessage,
  flip,
  toggleCamera,
  onCameraStarted,
  onCameraStopped
} = useCameraSignRecognition(modelUrl)

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
