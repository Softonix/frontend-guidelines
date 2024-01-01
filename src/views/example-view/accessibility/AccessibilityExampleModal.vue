<template>
  <el-dialog
    :model-value="modelValue"
    :title="title"
    destroy-on-close
    @close="closeModal"
  >
    <h1>This is a message</h1>
  </el-dialog>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  title: string
}>()

const emit = defineEmits(['update:modelValue'])

function closeModal () {
  emit('update:modelValue', false)
}
</script>
