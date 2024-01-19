<template>
  <el-switch
    v-model="lazyLoadingEnabled"
    active-text="With lazy-loading"
    inactive-text="Without lazy-loading"
  />

  <div v-if="lazyLoadingEnabled" class="colors-wrapper grid gap-5">
    <template v-for="randomColor in randomColors" :key="randomColor">
      <ItemObserver :removeIfInvisible="false">
        <TestComponent
          class="w-40 h-40 items-center justify-center flex p-5"
          :style="{'background-color' : randomColor}"
        />

        <template #placeholder>
          <div class="w-40 h-40" :style="{'background-color' : randomColor}" />
        </template>
      </ItemObserver>
    </template>
  </div>

  <div v-else class="colors-wrapper grid gap-5">
    <TestComponent
      v-for="randomColor in randomColors"
      :key="randomColor"
      class="w-40 h-40 items-center justify-center flex p-5"
      :style="{'background-color' : randomColor}"
    />
  </div>
</template>

<script setup lang="ts">
const lazyLoadingEnabled = ref(true)

function generateRandomHexColors (numColors: number) {
  const colors = []
  for (let i = 0; i < numColors; i++) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    colors.push(randomColor)
  }

  return colors
}

const randomColors = ref<string[]>([])

onMounted(() => {
  randomColors.value = generateRandomHexColors(1000)
})
</script>

<style scoped lang="scss">
.colors-wrapper {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
</style>
