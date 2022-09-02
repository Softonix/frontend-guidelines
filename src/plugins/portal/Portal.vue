<template>
  <teleport v-if="isMounted" :to="'#' + to">
    <slot />
  </teleport>
</template>

<script lang="ts" setup>
import type { TRegisterPortal, TRemovePortal } from './index'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

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
</script>
