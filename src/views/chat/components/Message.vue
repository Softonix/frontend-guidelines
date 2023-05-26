<template>
  <div :class="{['self-end']: currentUserMessage}">
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
defineProps<{
  message: any
  currentUserMessage: boolean
}>()
</script>
