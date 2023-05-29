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

    <el-input class="search-input w-full h-8 text-sm mb-2 px-6" placeholder="Search" :prefix-icon="MagnifyingGlass" />

    <!-- TODO: Add v-infinite-scroll directive -->
    <div class="overflow-y-auto h-full pb-2 md:pb-6 no-scrollbar">
      <ContactItem
        v-for="contact in contactData"
        :key="contact.id"
        :open="contact.id === $route.params.id"
        :contact="contact"
        :online="onlineUsers[contact.chatter_id]"
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
const { contactData } = storeToRefs(chatStore)

watch(onlineUsers, (newUsers) => {
  console.log('Online ids')
  console.log(newUsers)
})
</script>

<style lang="scss">
.search-input {
  .el-input__prefix {
    @apply text-xl leading-none;
  }
}
</style>
