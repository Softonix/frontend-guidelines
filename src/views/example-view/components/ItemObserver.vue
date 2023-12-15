<template>
  <div ref="intersectionTarget">
    <slot :intersecting="isIntersecting"/>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  options?: any
  removeAfterRender?: boolean
}>(), {
  removeAfterRender: true
})

const intersectionTarget = ref<HTMLElement | null>(null);
const isIntersecting = ref(false);

const handleIntersection: IntersectionObserverCallback = ([entry]) => {
  if (props.removeAfterRender) {
    isIntersecting.value = entry.isIntersecting;
  } else {
    isIntersecting.value = isIntersecting.value || entry.isIntersecting
  }
}

let observer: IntersectionObserver

onMounted(() => {
  if (intersectionTarget.value) {
    observer = new IntersectionObserver(handleIntersection, {...props.options});
    observer.observe(intersectionTarget.value);
  }
});

onUpdated(() => {
  observer.disconnect()

  nextTick(() => {
    if (intersectionTarget.value) {
      observer.observe(intersectionTarget.value)
    }
  })
})

onUnmounted(() => {
  if (observer && intersectionTarget.value) {
    observer.unobserve(intersectionTarget.value);
    observer.disconnect();
  }
});
</script>
