<template>
  <div class="my-2">
    <h2><b>This is a demo for unit testing</b></h2>
    <p>Times clicked: {{ count }}</p>
    <el-button @click="increment">increment</el-button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

function increment () {
  count.value += 1
}
</script>
