<template>
  <VeevalidateYupHeader />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import VeevalidateYupHeader from '@/components/layouts/VeevalidateYupHeader.vue'

export default defineComponent({
  name: 'VeevalidateYupLayout',

  components: { VeevalidateYupHeader }
})
</script>
