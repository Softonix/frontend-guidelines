<template>
  <div class="flex flex-wrap gap-12 main">
    <div
      v-for="(item, i) in 12"
      :key="i"
      :ref="(el) => itemRefs[i] = el as HTMLElement"
      class="w-[150px] card cursor-pointer border-2 rounded p-2 flex flex-col items-center justify-center bg-orange-200"
      @click="cardClick(i)"
    >
      <img src="@/assets/images/test.jpeg">
      <p class="capitalize text-lg">title</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const itemRefs = ref<HTMLElement[]>([])
const currentIndex = ref()

function cardClick (index: number) {
  (document as any).startViewTransition(() => {
    if (itemRefs.value[index].classList.contains('big-card')) {
      itemRefs.value[index].classList.remove('big-card')
    } else {
      itemRefs.value[index].classList.add('big-card')
      currentIndex.value = index
    }
  })
}
</script>

<style>
.main {
  view-transition-name: main;
  contain: layout;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(-60px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(60px);
  }
}

::view-transition-old(main) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

::view-transition-new(main) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}
</style>
