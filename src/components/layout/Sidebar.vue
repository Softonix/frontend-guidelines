<template>
  <div class="flex flex-col w-[220px] shrink-0 p-4">
    <el-button
      v-for="nav in navigation"
      :key="nav.name"
      type="primary"
      plain
      class="hover:underline capitalize mb-2 !mx-0"
      @click="$router.push({ name: nav.name })"
    >
      {{ t(nav.label) }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { defaultLayoutRoutes } from '@/router/routes'
const { $routeNames } = useGlobalProperties()
const { t } = useI18n()

// todo: you can import your default layout routes and map them with your navigation needs
const navigation = [
  ...defaultLayoutRoutes.children?.map(route => ({
    name: route.name as string,
    label: route.meta?.label || ''
    // ...
  })) || [],

  // todo: you add here your custom and not dependant to any layouts nav items
  {
    label: 'auth.login',
    name: $routeNames.login
  }
]
</script>
