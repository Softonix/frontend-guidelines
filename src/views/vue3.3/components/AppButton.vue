<template>
  <button
    :class="['button', buttonClass]"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue'

const { $buttonSize, $buttonType } = useGlobalProperties()

const props = withDefaults(defineProps<{
  type: keyof typeof $buttonType
  nativeType?: ButtonHTMLAttributes['type']
  size: keyof typeof $buttonSize
}>(),
{
  type: 'primary',
  size: 'default',
  nativeType: 'button'
})

const buttonClass = computed(() => [
  `button--${props.type}`,
  `button--${props.size}`
])
</script>
