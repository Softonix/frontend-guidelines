<template>
  <div>{{ done }}</div>
</template>

<script setup lang="ts">
const done = ref<string | number>('')
const executeNestedLoops = () => {
  const start = performance.now()

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      done.value = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))
    }
  }
  const end = performance.now()
  done.value = Math.round(end - start)
}

onMounted(() => {
  executeNestedLoops()
})
</script>
