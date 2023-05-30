<template>
  <div
    ref="messageRef"
    class="flex gap-1"
    :class="{['self-end flex-row-reverse']: currentUserMessage}"
  >
    <AppAvatar
      class="-bottom-1/2"
      :size="40"
      :src="sender.avatar_url ?? ''"
      :fullname="sender.fullname"
      :online="false"
    />
    <div class="flex flex-col gap-1">
      <div
        class="text-sm font-semibold text-orange-500"
        :class="{['self-end']: currentUserMessage}"
      >
        {{ sender.username }}
      </div>
      <div
        class="p-4 max-w-[320px] rounded-2xl text-primary"
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
  message: any
  currentUserMessage: boolean
  sender: any
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
    await chatService.markMessageAsRead(props.message.id)
  }
})
</script>
