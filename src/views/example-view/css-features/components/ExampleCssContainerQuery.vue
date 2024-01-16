<template>
  <div class="container-query flex flex-col md:flex-row gap-5 p-5 bg-gray-300">
    <div class="w-[300px] h-[200px] flex-shrink-0 bg-orange-50" />

    <div class="@container w-full bg-orange-50 p-5">
      <p class="container-query__title @lg:text-red-600">Container query title</p>
      <p class="container-query__subtitle">Container query subtitle</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-query {
  container: inbox / inline-size;

  &__title {
      @apply text-2xl font-semibold mb-2
  }

  &__subtitle {
      @apply text-lg
  }
}

@container inbox (width <= 600px) {
  .container-query {
    &__title {
        @apply font-bold text-green-600
    }

    &__subtitle {
        @apply text-green-600
    }
  }
}

/* Viewport Variables */
//@custom-media --portrait      (orientation: portrait);
//@custom-media --landscape     (orientation: landscape);
//
//@custom-media --md-only       (480px <= width <= 768px);
//@custom-media --md-n-above    (width >= 768px);
//@custom-media --md-n-below    (width <= 768px);
//@custom-media --md-phone      (--md-only) and (--portrait);
//
//@custom-media --xxl-only      (1440px <= width <= 1920px);
//@custom-media --xxl-n-above   (width >= 1920px);
//@custom-media --xxl-n-below   (width <= 1920px);
//
///* Capability Variables */
//@custom-media --touch    (hover: none) and (pointer: coarse);
//@custom-media --stylus   (hover: none) and (pointer: fine);
//@custom-media --pointer  (hover) and (pointer: coarse);
//@custom-media --mouse    (hover) and (pointer: fine);
//
//@custom-media --HDcolor  (dynamic-range: high);
//
///* Preference Variables */
//@custom-media --highContrast  (prefers-contrast: high);
//@custom-media --lowContrast   (prefers-contrast: low);
//
//@custom-media --opacityOK     (prefers-reduced-transparency: no-preference);
//@custom-media --opacityNotOK  (prefers-reduced-transparency: reduce);
//
//@custom-media --useDataOK     (prefers-reduced-data: no-preference);
//@custom-media --useDataNotOK  (prefers-reduced-data: reduce);
</style>
