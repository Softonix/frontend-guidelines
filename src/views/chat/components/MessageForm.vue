<template>
  <div v-show="cameraActive" class="absolute top-20 rounded-3xl overflow-hidden">
    <Camera
      ref="webcamRef" :resolution="{
        width: 640,
        height: 480
      }" :autoplay="false" @started="onCameraStarted" @stopped="onCameraStopped"
    >
      <div class="flex gap-5 h-full justify-center items-end z-[999] p-5 relative">
        <el-button @click="toggleCamera">
          Stop Camera
        </el-button>
        <el-button>
          Save to input
        </el-button>
      </div>

      <canvas ref="canvasRef" class="w-full h-full absolute left-0 right-0 top-0" />
    </Camera>
  </div>
  <el-form
    ref="sendMessageFormRef" :model="sendMessageModel" :rules="sendMessageRules" :show-message="false"
    class="md:border border-border-primary rounded-xl flex md:flex-col w-full" @submit.prevent
  >
    <el-form-item ref="messageInputRef" class="flex-1 m-0" prop="message">
      <el-input v-model="sendMessageModel.message" placeholder="Write a message" />
    </el-form-item>

    <div class="flex justify-between md:flex-1 md:p-3">
      <el-button @click="toggleCamera">Sign Language Detection</el-button>
      <el-button :type="$elComponentType.primary" @click="submitMessage">
        Send
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import * as tf from '@tensorflow/tfjs'
import Camera from 'simple-vue-camera'

const webcamRef = ref<InstanceType<typeof Camera> | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const cameraActive = ref(false)
const interval = ref<NodeJS.Timer | null>()

// Define our labelmap
const labelMap = {
  1: { name: 'Hello', color: 'red' },
  2: { name: 'Thank You', color: 'yellow' },
  3: { name: 'I Love You', color: 'lime' },
  4: { name: 'Yes', color: 'blue' },
  5: { name: 'No', color: 'purple' }
}

// Define a drawing function
function drawRect (
  boxes: any,
  classes: any,
  scores: any,
  threshold: any,
  imgWidth: number,
  imgHeight: number,
  ctx: CanvasRenderingContext2D) {
  for (let i = 0; i <= boxes.length; i++) {
    if (boxes[i] && classes[i] && scores[i] > threshold) {
      // Extract variables
      const [y, x, height, width] = boxes[i]
      const text = classes[i]

      // Set styling
      ctx.strokeStyle = labelMap[text].color
      ctx.lineWidth = 10
      ctx.fillStyle = 'white'
      ctx.font = '30px Arial'

      // DRAW!!
      ctx.beginPath()
      ctx.fillText(labelMap[text].name + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10)
      ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 1.5)
      ctx.stroke()
    }
  }
}

async function runCoco () {
  const net = await tf.loadGraphModel('https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')

  interval.value = setInterval(() => {
    detect(net)
  }, 16.7)
}

async function detect (net: tf.GraphModel<string | tf.io.IOHandler>) {
  if (webcamRef.value) {
    const video = webcamRef.value.video
    const videoWidth = webcamRef.value.video?.videoWidth
    const videoHeight = webcamRef.value.video?.videoHeight

    // webcamRef.value.video.v

    if (canvasRef.value && videoWidth && videoHeight) {
      canvasRef.value.width = videoWidth
      canvasRef.value.height = videoHeight
    }

    console.log('Video')
    console.log(video)

    if (video) {
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640, 480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = (await net.executeAsync(expanded)) as tf.Tensor<tf.Rank>[]
      console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()

      console.log(boxes)
      console.log(classes)
      console.log(scores)

      const ctx = canvasRef.value?.getContext('2d')

      requestAnimationFrame(() => {
        drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)
      })

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
    }
  }
}

async function toggleCamera () {
  if (cameraActive.value) {
    await webcamRef.value?.stop()
  } else {
    await webcamRef.value?.start()
  }
}

function onCameraStarted () {
  cameraActive.value = true
  runCoco()
}

function onCameraStopped () {
  cameraActive.value = false

  if (interval.value) {
    clearInterval(interval.value)
  }
}

const props = defineProps<{
  chatId: string | null
  senderId: string | null
}>()

const sendMessageFormRef = useElFormRef()
const sendMessageModel = useElFormModel({
  message: ''
})
const sendMessageRules = useElFormRules({
  message: [useRequiredRule()]
})

const messageInputRef = ref(null)

async function sendMessage () {
  console.log({
    message: sendMessageModel.message,
    chat_id: props.chatId,
    sender_id: props.senderId
  })
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
