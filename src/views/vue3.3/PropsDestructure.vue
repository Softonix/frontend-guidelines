<template>
  <div class="p-4 text-center">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">Reactive Props Destructure* (experimental feature)</h1>
    <PropsDest :msg="msg" />
    <el-button @click="msg ='I am a reactive prop'">Change PropDest Message</el-button>
  </div>
</template>

<script setup lang="ts">
const msg = ref()
</script>
