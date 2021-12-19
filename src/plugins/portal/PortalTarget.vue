<template>
  <div :id="name" />
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from 'vue'
import { TRenderPortals } from './index'

export default defineComponent({
  name: 'PortalTarget',

  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const renderPortals = inject('renderPortals') as TRenderPortals

    onMounted(() => renderPortals(props.name))
  }
})
</script>
