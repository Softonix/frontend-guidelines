<template>
  <div
    class="chat-view grid justify-items-center
   grid-rows-2  items-center pt-2 md:pb-10 overflow-hidden h-full"
  >
    <div class="overflow-y-auto no-scrollbar max-h-full self-start px-5 md:px-20 pb-5">
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
    <div class="md:min-w-[320px] w-full px-5 md:p-8">
      <MessageForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from './components/Message.vue'
import MessageForm from './components/MessageForm.vue'
</script>

<style lang="scss" scoped>
.chat-view {
  display: grid;
  grid-template-rows: auto 96px;
}
</style>
