<template>
  <div class="flex flex-col gap-2 max-w-2xl">
    <label for="fname">First name:</label>
    <el-input v-model="input1" />
    <el-input v-model="input12" />
    <el-input v-model="input13" />
    <el-input v-model="input2" :size="($attrs.size as any)" />
    <el-input v-model="input4" v-bind="$attrs" />
    <!-- <el-input :model-value="($attrs.input2 as string)" @update:model-value="$emit('update:input2', $event)" />
    <el-input :model-value="($attrs.input3 as string)" @update:model-value="$emit('update:input3', $event)" /> -->
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

// defineEmits<{
//   (e: 'update:input3', value: string): void
//   (e: 'update:input2', value: string): void
// }>()

const input1 = ref('')
const input12 = ref('')
const input13 = ref('')
const input2 = ref('')
const input4 = ref('')
</script>
