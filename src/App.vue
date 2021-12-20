<template>
  <ElConfigProvider
    :locale="{
      name: $i18n.locale,
      el: $i18n.messages[$i18n.locale]?.el
    }"
  >
    <router-view />
  </ElConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
