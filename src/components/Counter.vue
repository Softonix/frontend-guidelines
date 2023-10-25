<template>
  <div class="my-2" data-testid="root-wrapper">
    <h2><b>{{ title }}</b></h2>
    <p>Times clicked: {{ count }}</p>
    <el-button @click="increment">increment</el-button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
}>(), {
  title: 'This is a demo for unit testing'
})

const count = ref(0)

function increment () {
  count.value += 1
}
</script>
