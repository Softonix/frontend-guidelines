<template>
  <div>
    <h1 class="text-xl">React VS Vue example</h1>
    <hr class="my-2">
    <h3 class="mb-4 text-lg">Users list</h3>

    <div v-for="(user, index) in list" :key="index">- {{ user.firstName }} {{ user.lastName }}</div>

    <div class="text-green-800 font-semibold">{{ lastUser }}</div>

    <hr class="my-2">

    <!-- Form -->
    <h3 class="mb-4 text-lg">New user form</h3>

    <div class="flex space-x-4">
      <input v-model="currentUser.firstName" class="border border-gray-400 rounded-sm px-2" placeholder="First name">
      <input v-model="currentUser.lastName" class="border border-gray-400 rounded-sm px-2" placeholder="Last name">

      <button :disabled="!currentUser.firstName" @click="onSubmitForm">Add me</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = ref([{ firstName: 'John', lastName: 'Doe' }])
const currentUser = ref({ firstName: '', lastName: '' })

function onSubmitForm () {
  list.value.push(currentUser.value)
  currentUser.value = { firstName: '', lastName: '' }

  // Log new list length
  console.log('New list length is:', list.value.length)
}

const lastUser = computed(() => {
  const lastUser = list.value.slice(-1)[0]
  return `Last user is: ${lastUser.firstName} | ${lastUser.lastName}`
})
</script>
