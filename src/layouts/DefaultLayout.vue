<template>
  <!--
    This layout is just an example.
    Please create your own depending on your projects needs
  -->
  <div class="flex flex-col h-full overflow-hidden">
    <header
      class="p-4 bg-orange-200 text-white capitalize shadow flex items-center" data-testid="page-header"
    >
      <div class="w-40 mr-10">
        <img src="/images/logo.png" alt="logo">
      </div>

      <el-button
        v-for="nav in navigation"
        :key="nav.name"
        :type="$elComponentType.primary"
        plain
        class="hover:underline capitalize"
        @click="$router.push({ name: nav.name })"
      >
        {{ t(nav.label) }}
      </el-button>

      <FF name="FF-SX-1234-TEST" show-badge>
        <el-button type="primary" plain class="ml-3">Test</el-button>
      </FF>

      <PortalTarget :name="$portalNames.header" />
    </header>

    <div class="flex-grow overflow-auto p-4">
      <router-view />
    </div>

    <footer class="p-4 bg-red-200 capitalize shrink-0">example footer</footer>
  </div>
</template>

<script lang="ts" setup>
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
