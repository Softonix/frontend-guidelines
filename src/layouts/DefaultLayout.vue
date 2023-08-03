<template>
  <div class="flex flex-col h-full overflow-hidden">
    <header
      class="p-4 bg-primary text-white capitalize shadow flex items-center" data-testid="page-header"
    >
      <div class="w-40 mr-10 shrink-0">
        <img src="/images/logo.png" alt="logo">
      </div>

      <div class="flex flex-wrap gap-y-3">
        <el-button
          v-for="nav in navigation"
          :key="nav.name"
          :type="$elComponentType.primary"
          plain
          class="hover:underline capitalize"
          @click="$router.push({ name: nav.name })"
        >
          {{ nav.label }}
        </el-button>
      </div>
    </header>

    <div class="flex-grow overflow-auto">
      <router-view />
    </div>

    <footer class="gradient flex items-center justify-center space-x-5 p-4 bg-primary capitalize shrink-0">
      <IconFlame />
      <span class="text-white text-5xl tracking-tight font-extrabold">
        Vue 3.3
      </span>
      <IconFlame />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defaultLayoutRoutes } from '@/router/routes'

// todo: you can import your default layout routes and map them with your navigation needs
const navigation = [
  ...defaultLayoutRoutes.children?.map(route => ({
    name: route.name as string,
    label: route.meta?.label || ''
  })) || []
]
</script>
