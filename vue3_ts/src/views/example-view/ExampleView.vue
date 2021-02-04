<template>
  <div>
    {{ filteredDate }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { filterDate } from '@/core/filters'

export default defineComponent({
  name: 'ExampleView',

  setup () {
    const date = ref(new Date())
    const filteredDate = filterDate(date)

    return {
      filteredDate
    }
  }
})
</script>
