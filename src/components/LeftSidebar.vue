<template>
  <aside
    class="transition-all shadow-2xl fixed left-0 w-full md:w-[240px]
       lg:w-[320px] z-[999] py-12 md:py-3 top-0 bottom-0 border-r
       border-border-primary bg-block-primary"
    :class="open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
  >
    <el-button class="md:hidden absolute top-2 right-2" text circle @click="emit('onClose')">
      <el-icon class="text-xl leading-none">
        <CloseCross />
      </el-icon>
    </el-button>

    <el-input
      v-model="userInput"
      class="search-input w-full h-8 text-sm mb-2 px-6"
      placeholder="Search"
      :prefix-icon="MagnifyingGlass"
    />

    <!-- TODO: Add v-infinite-scroll directive -->
    <div v-loading="chatsLoading" class="overflow-y-auto h-full pb-2 md:pb-6 no-scrollbar">
      <ContactItem
        v-for="chat in chatsToShow"
        :key="chat.chat_id!"
        :open="chat.chat_id === $route.params.id"
        :chat="chat"
        :online="!!onlineUsers[chat.user_id ?? '']"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import MagnifyingGlass from '@/components/icons/MagnifyingGlass.vue'
import ContactItem from '@/components/ContactItem.vue'
import { useChatStore } from '@/views/chat/chat.store'

defineProps<{
  open?: boolean
}>()

const emit = defineEmits(['onClose'])

const chatStore = useChatStore()
const authStore = useAuthStore()

const { onlineUsers } = storeToRefs(authStore)
const { chats, chatsLoading } = storeToRefs(chatStore)
const { findChat } = chatStore

const userInput = ref('')
const filteredChats = ref<TChatData>([])

const searchQuery = computed(() => userInput.value.split(/\s+/g).join('|')
)
const chatsToShow = computed(() => filteredChats.value.length ? filteredChats.value : chats.value)

watch(searchQuery, () => {
  runSearch()
})

const debouncedFindChat = useDebounceFn(async () => {
  try {
    chatsLoading.value = true
    filteredChats.value = await findChat(searchQuery.value) ?? []
  } catch (err) {
    console.log(err)
  } finally {
    chatsLoading.value = false
  }
}, 1000)

function runSearch () {
  debouncedFindChat()
}
</script>

<style lang="scss">
.search-input {

  .el-input__prefix {
    @apply text-xl leading-none;
  }
}
</style>
