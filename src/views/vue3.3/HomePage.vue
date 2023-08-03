<template>
  <div class="gradient w-full h-full px-4 py-8 flex justify-center items-center">
    <div class="max-w-3xl text-white/80 text-center font-sans">
      <h1 class="text-3xl font-medium">
        Today we're excited to announce
        <a href="https://blog.vuejs.org/posts/vue-3-3" class="underline hover:text-orange-300 ease-in-out duration-300"> Vue 3.3 features!</a>
      </h1>
      <p class="text-xl mt-4">
        This release is focused on developer experience improvements - in particular,
        SFC <span>&lt;script setup&gt;</span>  usage with
        TypeScript.Together with the 1.6 release of Vue Language Tools (previously known as Volar), we have resolved
        many long-standing pain points when using Vue with TypeScript.
      </p>
      <div class="mt-4 text-white">
        <h2 class="text-3xl font-semibold mb-3">
          Agenda ⏱
        </h2>
        <div v-for="(text, index) in list" :key="index" class="flex">
          <div class="shrink-0">
            <IconCheckmarkRounded class="text-grey shrink-0 mb-1" />
          </div>
          <p class="ml-2.5 font-500">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = [
  'Imported and Complex Types Support in Macros',
  'Generic Components',
  'Typed Slots with defineSlots',
  'defineOptions',
  'Reactive Props Destructure* (experimental feature)',
  'defineModel* (experimental feature)',
  'More Ergonomic defineEmits',
  'Functional Review',
  'Questions'
]
</script>
