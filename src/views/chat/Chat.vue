<template>
  <div class="chat-view grid justify-items-center grid-rows-2  items-center px-20 pt-2 pb-10 overflow-hidden h-full">
    <div class="overflow-y-auto no-scrollbar max-h-full self-start">
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
    <div class="min-w-[320px] w-full">
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
