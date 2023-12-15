<template>
  <div>{{ done }}</div>
</template>

<script setup lang="ts">
const done = ref<string | number>('')
const executeNestedLoops = () => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 1000; j++) {
      done.value = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
    }
  }
  done.value = 'done'

};

onMounted(() => {
  executeNestedLoops();
});
</script>
