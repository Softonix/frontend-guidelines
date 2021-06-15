<template>
  <Portal :to="$portalNames.HEADER" />
  <div ref="exampleElementRef">
    <Compute #default="{ test }" :test="1 + 2">
      <span>{{ filteredDate }}</span>
      <span>{{ test }}</span>
    </Compute>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { filterDate } from '@/core/filters'
import Compute from '@/components/stateless/hoc/Compute.vue'
import { useElementRef } from '@/composables'

export default defineComponent({
  name: 'ExampleView',
  components: { Compute },
  setup () {
    const exampleElementRef = useElementRef()

    const date = ref(new Date())
    const filteredDate = filterDate(date)

    return {
      exampleElementRef,
      filteredDate
    }
  }
})
</script>
