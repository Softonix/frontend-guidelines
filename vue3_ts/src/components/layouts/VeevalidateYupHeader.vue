<template>
  <nav class="mt-10">
    <ul class="flex justify-center">
      <router-link
        v-for="({ link, label }, index) in links"
        :key="index"
        :to="{ name: link }"
        class="mx-5 px-10 py-5 text-sm text-white bg-grey-500 hover:bg-grey-700 rounded"
      >
        {{ label }}
      </router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { routesNames } from '@/router'

export default defineComponent({
  name: 'AppHeader',

  setup () {
    const links = [
      { link: routesNames.modelExample, label: 'Model Example' },
      { link: routesNames.eventsExample, label: 'Events Example' },
      { link: routesNames.manuallyErrors, label: 'Manually Errors Example' },
      { link: routesNames.formExample, label: 'Form Example' },
      { link: routesNames.customComponents, label: 'Custom Components Example' }
    ]
    return {
      links
    }
  }
})
</script>

<style scoped>

</style>
