<template>
  <div ref="intersectionTargetRef">
    <slot v-if="isVisible" />

    <slot v-else name="placeholder" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  options?: {
    root?: HTMLElement
    rootMargin?: string
    threshold: number
  }
  removeIfInvisible?: boolean
  needToWatchComponentUpdating?: boolean // this props need for draggable elements
}>(), {
  removeIfInvisible: true,
  needToWatchComponentUpdating: false
})

const intersectionTargetRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const handleIntersection: IntersectionObserverCallback = ([entry]) => {
  if (props.removeIfInvisible) {
    isVisible.value = entry.isIntersecting
  } else {
    isVisible.value = isVisible.value || entry.isIntersecting
  }
}

let observer: IntersectionObserver

onMounted(() => {
  if (intersectionTargetRef.value) {
    observer = new IntersectionObserver(handleIntersection, { ...props.options })
    observer.observe(intersectionTargetRef.value)
  }
})

onUpdated(() => {
  if (props.needToWatchComponentUpdating) {
    observer.disconnect()

    nextTick(() => {
      if (intersectionTargetRef.value) {
        observer.observe(intersectionTargetRef.value)
      }
    })
  }
})

onUnmounted(() => {
  if (observer && intersectionTargetRef.value) {
    observer.unobserve(intersectionTargetRef.value)
    observer.disconnect()
  }
})
</script>
