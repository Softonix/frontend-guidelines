<template>
  <div
    ref="messageRef"
    class="flex gap-1 relative"
    :class="{['self-end flex-row-reverse']: currentUserMessage}"
  >
    <AppAvatar
      class="self-end"
      :size="40"
      :src="message.users.avatar_url ?? ''"
      :fullname="message.users.fullname"
      :online="false"
    />
    <div class="flex flex-col gap-1">
      <div
        class="text-sm font-semibold text-orange-500"
        :class="{['self-end']: currentUserMessage}"
      >
        {{ message.users.username }}
      </div>
      <div
        class="p-4 max-w-[320px] rounded-2xl text-primary break-words"
        :class="[currentUserMessage ? 'self-end bg-system-info-light rounded-br-none'
          : 'bg-block-tertiary rounded-bl-none']"
      >
        {{ message.message }}
      </div>

      <span
        class="text-xs text-secondary"
        :class="{['self-end']: currentUserMessage}"
      >{{ new Intl.DateTimeFormat("en-Us", {
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date(message.created_at)) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  message: IMessage
  currentUserMessage: boolean
  last: boolean
  lastRead: boolean
}>()
const messageRef = ref<HTMLDivElement | null>(null)
const messageVisible = ref(false)

const read = toRef(() => props.message.read)
const last = toRef(() => props.last)

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
    await chatService.markMessageAsRead(props.message.id)
  }
})

onMounted(async () => {
  // await nextTick()

  if (messageRef.value) {
    if (props.lastRead && !props.currentUserMessage) {
      console.log('from 1')
      console.log(props.message.message)
      messageRef.value.scrollIntoView()
      return
    }

    if (last.value && (props.currentUserMessage || props.message.read) && !props.lastRead) {
      console.log('from 2')
      messageRef.value.scrollIntoView()
    }
  }
})
</script>
