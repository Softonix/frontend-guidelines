<template>
  <div class="flex max-w-[800px] mx-auto overflow-scroll snap-x snap-mandatory">
    <div
      v-for="item in 20"
      :key="item"
      class="w-44 h-44 flex-shrink-0 flex justify-center items-center
         snap-always snap-start bg-orange-100 odd:bg-gray-200"
    >
      {{ item }}
    </div>
  </div>
</template>
