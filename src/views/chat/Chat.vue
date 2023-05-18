<template>
  <DefaultLayout>
    <template #leftSidebarContent>
      <el-input
        class="search-input w-full h-8 text-sm mb-2"
        placeholder="Search"
        :prefix-icon="MagnifyingGlass"
      />
    </template>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import MagnifyingGlass from '@/components/icons/MagnifyingGlass.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
