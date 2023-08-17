<template>
  <div>
    <h2>This is an example for Vitest. See the test "Counter.spec.ts" file in the frontend-guidelines.</h2>
    <p>Times clicked: {{ count }}</p>
    <el-button @click="increment">increment</el-button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

function increment () {
  count.value++
}
</script>
