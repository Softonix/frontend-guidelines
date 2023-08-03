<template>
  <div class="p-4">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">More Ergonomic defineEmits</h1>

    <Ergonomic @showData="handleData" />

    <p class="mt-3">
      {{ example }}
    </p>
  </div>
</template>

<script lang="ts" setup>

const example = ref({
  testValue: 0,
  testString: ''
})

function handleData (testValue: number, testString: string) {
  example.value = { testValue, testString }
}
</script>
