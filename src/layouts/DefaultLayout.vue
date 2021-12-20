<template>
  <!--todo: This layout is just an example. Please create your own depending on your projects needs  -->
  <div class="flex flex-col h-full overflow-hidden">
    <header class="p-4 bg-primary text-white capitalize">
      <el-button
        v-for="nav in navigation"
        :key="nav.name"
        :type="$componentType.PRIMARY"
        plain
        class="hover:underline mr-4"
        @click="$router.push({ name: nav.name })"
      >
        <Icon class="mr-2" :name="nav.icon" />
        <span class="capitalize">{{ $t(nav.label) }}</span>
      </el-button>
    </header>

    <div class="flex-grow p-4">
      <router-view />
    </div>

    <footer class="p-4 bg-red-200 capitalize">example footer</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { defaultLayoutRoutes, routeNames } from '@/router'
import { useGlobalProperties } from '@/composables'

export default defineComponent({
  name: 'DefaultLayout',

  setup () {
    // todo: check this composable
    const { $icons } = useGlobalProperties()

    // todo: you can import your default layout routes and map them with your navigation needs
    const navigation = [
      ...defaultLayoutRoutes.children?.map(route => ({
        name: route.name as string,
        label: route.meta?.label || '',
        icon: route.meta?.icon
        // ...
      })) || [],

      // todo: you add here your custom and not dependant to any layouts nav items
      {
        label: 'auth.login',
        name: routeNames.login,
        icon: $icons.farBell
      }
    ]

    return { navigation }
  }
})
</script>
