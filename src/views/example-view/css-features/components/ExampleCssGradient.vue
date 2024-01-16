<template>
  <p class="title text-3xl font-semibold mb-6">Css text gradients: </p>

  <div class="flex gap-10">
    <div class="gradient-border-1 w-48 h-48 mx-auto" />
    <div class="gradient-border-2 w-48 h-48 mx-auto" />
  </div>
</template>

<style lang="scss" scoped>
.title {
  background: linear-gradient(to right, black, #fa4415 15% );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-border-1 {
  border: 10px solid;
  border-image: linear-gradient(45deg, green, orange, yellow) 1;
}

.gradient-border-2 {
  background: linear-gradient(white, white) padding-box,
  linear-gradient(to right, green, orange, yellow) border-box;
  border-radius: 50%;
  border: 10px solid transparent;
}

</style>
