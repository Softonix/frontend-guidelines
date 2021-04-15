<template>
  <teleport v-if="isMounted" :to="'#' + to">
    <slot />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { TRegisterPortal, TRemovePortal } from './index'

export default defineComponent({
  name: 'Portal',

  props: {
    to: {
      type: String,
      required: true
    }
  },

  setup (props) {
    const registerPortal = inject('registerPortal') as TRegisterPortal
    const removePortal = inject('removePortal') as TRemovePortal

    const isMounted = ref(false)

    function mountPortal () {
      isMounted.value = true
    }

    onMounted(async () => {
      registerPortal(props.to, mountPortal)
      if (document.getElementById(props.to)) {
        mountPortal()
      }
    })

    onBeforeUnmount(() => removePortal(props.to, mountPortal))

    return {
      isMounted
    }
  }
})
</script>
