<template>
  <div
    ref="messageRef"
    :class="{['self-end']: currentUserMessage}"
  >
    <div
      class="p-4 max-w-fit rounded-2xl text-primary"
      :class="[currentUserMessage ? 'self-end bg-system-info-light rounded-br-none'
        : 'bg-block-tertiary rounded-bl-none']"
    >
      {{ message.message }}
    </div>

    <span class="text-xs text-secondary">{{ new Intl.DateTimeFormat("en-Us", {
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(message.created_at)) }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  message: any
  currentUserMessage: boolean
}>()
const messageRef = ref(null)
const messageVisible = ref(false)
const read = toRef(() => props.message.read)

const { stop } = useIntersectionObserver(
  messageRef,
  ([{ isIntersecting }]) => {
    messageVisible.value = isIntersecting
  }
)

watch(messageVisible, async (visible) => {
  if (read.value) {
    stop()
  }

  if (visible && !read.value && !props.currentUserMessage) {
    await chatService.markMessageAsRead(props.message)
  }
})
</script>
