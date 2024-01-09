<template>
  <el-table
    :data="tableContent"
    :class="['table-class', exampleViewStore.highContrastMode ? 'table-high-contrast' : '']"
  >
    <el-table-column
      #="{ row }"
      label="Name"
      width="200"
    >
      <button
        class="link"
        @click="useModal.open(row.name)"
      >
        {{ row.name }}
      </button>
    </el-table-column>

    <el-table-column prop="description" label="Description" width="400" />

    <el-table-column
      #="{ row }"
      label="Actions"
    >
      <div class="flex gap-5">
        <button @click="useModal.open(row.name)">
          <img :src="pencilIcon" :alt="`Edit ${row.name}`">
        </button>

        <el-button
          type="danger"
          :aria-label="`Delete ${row.name}`"
          @click="onDelete(row.name)"
        >
          Delete
        </el-button>
      </div>
    </el-table-column>
  </el-table>

  <AccessibilityExampleModal
    v-model="useModal.state.opened"
    :title="useModal.state.title"
  />
</template>

<script setup lang="ts">
import pencilIcon from '@/assets/icons/pencil.svg'
import AccessibilityExampleModal from './AccessibilityExampleModal.vue'

const exampleViewStore = useExampleViewStore()

const tableContent = [
  { name: 'Item 1', description: 'Some description' },
  { name: 'Item 2', description: 'Some description' },
  { name: 'Item 3', description: 'Some description' },
  { name: 'Item 4', description: 'Some description' },
  { name: 'Item 5', description: 'Some description' },
  { name: 'Item 6', description: 'Some description' }
]

const useModal = (() => {
  const opened = ref(false)
  const title = ref('')

  function open (_title: string) {
    opened.value = true
    title.value = _title
  }

  return { state: reactive({ opened, title }), open }
})()

function onDelete (name: string) {
  alert(`${name} was deleted!`)
}
</script>

<style scoped lang="scss">
.link {
  @apply text-primary hover:underline;
}
.el-table {
  font-size: 1rem;
}
.table-high-contrast * {
  button {
    @apply bg-[#0000FF] text-white font-bold;

    img {
      // filter to make it white
      filter: brightness(0) saturate(100%) invert(89%) sepia(61%) saturate(897%);
    }
  }

  &:focus {
    @apply bg-[#FFFF00] text-[#0000FF] font-bold;

    img {
      filter: brightness(0) saturate(100%) invert(9%) sepia(98%)
        saturate(6545%) hue-rotate(248deg) brightness(100%) contrast(147%) !important;
    }
  }

}
</style>
