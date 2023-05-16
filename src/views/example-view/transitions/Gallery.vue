<template>
  <div class="flex flex-wrap gap-12">
    <div
      ref="image"
      class="w-[150px] banner-img cursor-pointer border-2 rounded p-2
       flex flex-col items-center justify-center bg-blue-500"
      @click="open"
    >
      <img src="@/assets/images/kimi.jpeg">
      <p class="capitalize text-lg">Senna</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const image = ref()

function open () {
  (document as any).startViewTransition(() => {
    if (image.value.classList.contains('w-[350px]')) {
      image.value.classList.remove('w-[350px]')
    } else {
      image.value.classList.add('w-[350px]')
    }
  })
}
</script>

<style>
.banner-img img {
  view-transition-name: banner-img;
  contain: layout;
}

::view-transition-old(banner-img),
::view-transition-new(banner-img) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-image-pair(banner-img) {
  isolation: none;
}
</style>
