<template>
  <div class="card">
    <el-button @click="increase">+ 2px</el-button>
    <el-button @click="decrease">- 2px</el-button>

    <p class="title font-semibold text-center mt-5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, sit.
    </p>
  </div>
</template>

<script lang="ts" setup>
const fontSize = ref(24)

function increase () {
  fontSize.value += 2
}

function decrease () {
  fontSize.value -= 2
}
const fontStyle = computed(() => {
  return fontSize.value + 'px'
})
</script>

<style lang="css" scoped>
.card {
  .title {
    &:hover {
      @apply text-red-600 cursor-pointer
    }

      font-size: v-bind(fontStyle);
    }
}
</style>
