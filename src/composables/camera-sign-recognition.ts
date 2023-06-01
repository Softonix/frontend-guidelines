import type Camera from 'simple-vue-camera'

import * as tf from '@tensorflow/tfjs'

export function useCameraSignRecognition (modelUrl: string) {
  const webcamRef = ref<InstanceType<typeof Camera> | null>(null)
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const cameraActive = ref(false)
  const interval = ref<NodeJS.Timer | null>()
  const signLanguageMessage = ref('')

  const labelMap: ILabelMap = {
    1: { name: 'Hello', color: 'red' },
    2: { name: 'Thank You', color: 'yellow' },
    3: { name: 'I Love You', color: 'lime' },
    4: { name: 'Yes', color: 'blue' },
    5: { name: 'No', color: 'purple' }
  }

  async function flip () {
    const currDevice = webcamRef.value?.currentDeviceID()
    const devices = await webcamRef.value?.devices(['videoinput'])
    const otherDevice = devices?.find(device => device.deviceId !== currDevice)

    if (otherDevice?.deviceId) {
      webcamRef.value?.changeCamera(otherDevice?.deviceId)
    }
  }

  function drawRect (
    boxes: number[][],
    classes: number[],
    scores: number[],
    threshold: number,
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

        // Draw
        ctx.beginPath()
        signLanguageMessage.value = labelMap[text].name
        ctx.fillText(labelMap[text].name + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10)
        ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 1.5)
        ctx.stroke()
      }
    }
  }

  async function runCoco () {
    const net = await tf.loadGraphModel(modelUrl)

    interval.value = setInterval(() => {
      detect(net)
    }, 16.7)
  }

  async function detect (net: tf.GraphModel<string | tf.io.IOHandler>) {
    if (webcamRef.value) {
      const video = webcamRef.value.video
      const videoWidth = webcamRef.value.video?.videoWidth
      const videoHeight = webcamRef.value.video?.videoHeight

      if (canvasRef.value && video && videoWidth && videoHeight) {
        canvasRef.value.width = videoWidth
        canvasRef.value.height = videoHeight

        const img = tf.browser.fromPixels(video)
        const resized = tf.image.resizeBilinear(img, [640, 480])
        const casted = resized.cast('int32')
        const expanded = casted.expandDims(0)
        const obj = (await net.executeAsync(expanded)) as tf.Tensor<tf.Rank>[]
        console.log(obj)

        const boxes = (await obj[1].array()) as number[][][]
        const classes = (await obj[2].array()) as number[][]
        const scores = (await obj[4].array()) as number[][]

        console.log(boxes)
        console.log(classes)
        console.log(scores)

        const ctx = canvasRef.value?.getContext('2d')

        if (ctx) {
          requestAnimationFrame(() => {
            drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)
          })
        }

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
      webcamRef.value?.stop()
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

  onBeforeUnmount(() => {
    if (interval.value) {
      clearInterval(interval.value)
    }
  })

  return {
    webcamRef,
    canvasRef,
    cameraActive,
    signLanguageMessage,
    flip,
    toggleCamera,
    onCameraStarted,
    onCameraStopped
  }
}
