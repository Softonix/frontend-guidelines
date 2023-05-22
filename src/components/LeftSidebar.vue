<template>
  <Transition>
    <aside
      class="left-sidebar fixed px-6 left-0 w-0 md:w-[240px]
       lg:w-[320px] hidden  md:block py-12 md:py-3  top-0 bottom-0 border-r border-border-primary"
      :class="{open: open}"
    >
      <el-button class="md:hidden absolute top-2 right-2" text circle @click="emit('onClose')">
        <el-icon class="text-xl leading-none">
          <CloseCross />
        </el-icon>
      </el-button>
      <el-input
        class="search-input w-full h-8 text-sm mb-2"
        placeholder="Search"
        :prefix-icon="MagnifyingGlass"
      />
      <!-- TODO: Add v-infinite-scroll directive -->
      <div class="overflow-y-auto h-full pb-2 md:pb-6 no-scrollbar">
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </aside>
  </Transition>
</template>

<script lang="ts" setup>
import MagnifyingGlass from '@/components/icons/MagnifyingGlass.vue'
import ContactItem from '@/components/ContactItem.vue'

defineProps<{
  open?: boolean
}>()

const emit = defineEmits(['onClose'])
</script>

<style lang="scss">
.left-sidebar {
  box-shadow: 0px 0px 4px rgba(2, 17, 37, 0.04), 2px 0px 8px rgba(2, 17, 37, 0.04), 6px 0px 16px rgba(2, 17, 37, 0.04);

  &.open {
    width: 100%;
    display: block;
    z-index: 999;
    @apply bg-page-primary;
  }
}
</style>
