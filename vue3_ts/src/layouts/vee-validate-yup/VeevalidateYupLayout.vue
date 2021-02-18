<template>
  <VeevalidateYupHeader />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import VeevalidateYupHeader from './VeevalidateYupHeader.vue'

export default defineComponent({
  name: 'VeevalidateYupLayout',

  components: { VeevalidateYupHeader }
})
</script>
