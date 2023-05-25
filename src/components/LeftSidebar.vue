<template>
  <Transition>
    <aside
      class="transition-all shadow-2xl fixed px-6 left-0 w-full md:w-[240px]
       lg:w-[320px] z-[999] py-12 md:py-3 top-0 bottom-0 border-r border-border-primary bg-block-primary"
      :class="open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
    >
      <el-button class="md:hidden absolute top-2 right-2" text circle @click="emit('onClose')">
        <el-icon class="text-xl leading-none">
          <CloseCross />
        </el-icon>
      </el-button>

      <el-input class="search-input w-full h-8 text-sm mb-2" placeholder="Search" :prefix-icon="MagnifyingGlass" />

      <!-- TODO: Add v-infinite-scroll directive -->
      <div class="overflow-y-auto h-full pb-2 md:pb-6 no-scrollbar">
        <ContactItem
          v-for="contact in contactData"
          :key="contact.id"
          :contact="contact"
        />
      </div>
    </aside>
  </Transition>
</template>

<script lang="ts" setup>
import MagnifyingGlass from '@/components/icons/MagnifyingGlass.vue'
import ContactItem from '@/components/ContactItem.vue'
import { useChatStore } from '@/views/chat/chat.store'

defineProps<{
  open?: boolean
}>()

const emit = defineEmits(['onClose'])

// computed by chat, user

const chatStore = useChatStore()
const authStore = useAuthStore()
const { currentUser } = storeToRefs(authStore)
const { chats } = storeToRefs(chatStore)
const { getChats } = chatStore

const contactData = computed(() => {
  return chats.value.map(chat => {
    const chatter = chat.users.find((user) => {
      return user.id === currentUser.value?.id
    })
    const lastMessage = chat.messages[chat.messages.length - 1]
    console.log(chatter)
    return {
      id: chat.id,
      avatar_url: chatter.avatar_url || '',
      fullname: chatter.fullname,
      msg: {
        id: lastMessage.id,
        text: lastMessage.message,
        sent_at: lastMessage.created_at
      }
    }
  })
})

onMounted(() => {
  getChats()
})
</script>

<style lang="scss">
.search-input {
  .el-input__prefix {
    @apply text-xl leading-none;
  }
}
</style>
