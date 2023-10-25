<template>
  <div class="flex-grow">
    <el-button
      v-for="nav in components"
      :key="nav.label"
      type="primary"
      plain
      class="hover:underline capitalize"
      @click="$router.push({ name: nav.name })"
    >
      {{ nav.label }}
    </el-button>

    <div class="py-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>

const components = {
  Fade: {
    label: 'Fade',
    name: 'fade'
  },
  Slide: {
    label: 'Slide',
    name: 'slide'
  },
  Gallery: {
    label: 'Gallery',
    name: 'gallery'
  }
}

</script>
