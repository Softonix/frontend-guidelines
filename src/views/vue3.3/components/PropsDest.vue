<template>
  <p class="my-4 text-primary text-base font-semibold">
    {{ msg }}
  </p>
</template>

<script setup lang="ts">

// eslint-disable-next-line vue/no-setup-props-destructure
const { msg = '"default message"' } = defineProps(['msg'])

watchEffect(() => {
  console.log(`msg is: ${msg}`)
})
</script>
