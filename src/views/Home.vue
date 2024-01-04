<template>
  <div class="p-5" :style="{background: colors.orange[400]}">{{ testVar }}</div>
</template>

<script lang="ts" setup>
import { colors } from '@colors'

const generalStore = useGeneralStore()
const { testVar } = storeToRefs(generalStore)
</script>
