<template>
  <el-table :data="tableContent" class="table-class">
    <el-table-column #="{ row }" label="Name" width="200">
      <span class="link" @click="useModal.open(row.name)">
        {{ row.name }}
      </span>
    </el-table-column>

    <el-table-column prop="description" label="Description" width="400" />

    <el-table-column #="{ row }" label="Actions">
      <div class="flex gap-5">
        <img :src="pencilIcon" @click="useModal.open(row.name)">

        <el-button type="danger" @click="onDelete(row.name)">
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

<style scoped>
.link {
  @apply text-primary hover:underline cursor-pointer ;
}
.table-class > * {
  font-size: 16px;
}
</style>
