<template>
  <ElConfigProvider
    :locale="{
      name: $i18n.locale,
      el: $i18n.messages[$i18n.locale].el
    }"
  >
    <PortalTarget :name="$portalNames.HEADER" />
    <router-view />
  </ElConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  }
})
</script>
