<template>
  <div class="flex alert flex-wrap gap-5">
    <div
      v-for="item in 20"
      :key="item"
      class="w-[100px] h-[100px] p-2 flex-shrink-0 bg-gray-100"
      :class="{ 'active' : item % 3 === 0}"
    >
      <p class="text-center">Sale</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active {
    @apply border-2 border-green-500 text-green-500
}
:nth-child(2 of .active) {
    @apply border-2 border-dashed border-red-600 text-red-500
}
</style>
