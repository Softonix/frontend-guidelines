<template>
  <div class="flex flex-col justify-items-center items-center pt-2 pb-2 md:pb-5 overflow-hidden h-full">
    <div class="overflow-y-auto no-scrollbar flex-1 w-full px-5 md:px-20 pb-5">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>

    <div class="md:min-w-[320px] w-full pt-2 px-5 flex-shrink-0 pb-5">
      <MessageForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'

onMounted(() => {
  // getContactInfo()
})
</script>
