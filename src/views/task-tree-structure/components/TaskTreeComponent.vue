<template>
  <ul>
    <li v-for="item in items" :key="item" class="pl-4">
      <p class="mb-2">- {{ hashMap[item].firstName }} {{ hashMap[item].lastName }} &lt;{{ hashMap[item].email }}&gt;</p>

      <TaskTreeComponent :items="hashMap[item].members" :hashMap="hashMap" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
  hashMap: any
}>()
</script>
