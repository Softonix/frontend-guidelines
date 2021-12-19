<template>
  <div class="flex flex-col h-full overflow-hidden">
    <header class="p-4 bg-green-400 text-white capitalize">
      <button
        v-for="r in routes"
        :key="r.name"
        class="hover:underline mr-1"
        @click="$router.push({ name: r.name })"
      >
        {{ r.label }}
      </button>
    </header>

    <div class="flex-grow p-4">
      <router-view />
    </div>

    <footer class="p-4 bg-red-200 capitalize">example footer</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { routesNames } from '@/router'

export default defineComponent({
  name: 'DefaultLayout',

  setup () {
    const routes = [
      { label: 'Home', name: routesNames.rootPage },
      { label: 'VeeValidate', name: routesNames.veevalidateYup },
      { label: 'Login', name: routesNames.login }
    ]
    return { routes }
  }
})
</script>
