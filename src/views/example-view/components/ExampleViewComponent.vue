<template>
  <div
    v-loading="generalLoading"
    data-testid="general-loading"
    class="inline-flex flex-col items-start"
  >
    <label>General store example</label>
    <p
      data-testid="general-store-var"
      class="mb-2"
    >
      {{ exampleGeneralVar }}
    </p>

    <el-button
      data-testid="general-store-get-button"
      :type="'success'"
      @click="generalStore.getGeneralStoreVar"
    >
      get general store value
    </el-button>
  </div>
</template>

<script setup lang="ts">
const generalStore = useGeneralStore()
const { exampleGeneralVar, generalLoading } = storeToRefs(generalStore)
</script>
