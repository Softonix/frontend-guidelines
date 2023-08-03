<template>
  <div class="p-4">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">defineOptions</h1>
    <DefineOpt
      id="fname" v-model:input2="input2" v-model:input3="input3" type="text"
      title="First name" name="fname" size="large" maxlength="6" placeholder="Please enter your name"
    />
  </div>
</template>

<script setup lang="ts">
const input2 = ref('')
const input3 = ref('')
</script>
