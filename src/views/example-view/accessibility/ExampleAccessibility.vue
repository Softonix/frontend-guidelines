<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.value"
      :name="tab.value"
      :label="tab.label"
    />
  </el-tabs>

  <el-switch
    v-model="exampleViewStore.highContrastMode"
    active-text="High contrast"
  />

  <component :is="activeComponent" />
</template>

<script setup lang="ts">
import AccessibilityAntiPatterns from './AccessibilityAntiPatterns.vue'
import AccessibilityPatterns from './AccessibilityPatterns.vue'

enum ETabs { ANTI_PATTERNS = 1, PATTERNS }

const exampleViewStore = useExampleViewStore()

const activeTab = ref(ETabs.ANTI_PATTERNS)

const tabs = [
  { value: ETabs.ANTI_PATTERNS, label: 'Don\'t do this' },
  { value: ETabs.PATTERNS, label: 'Do this instead' }
]

const tabComponents = {
  [ETabs.ANTI_PATTERNS]: AccessibilityAntiPatterns,
  [ETabs.PATTERNS]: AccessibilityPatterns
}

const activeComponent = computed(() => tabComponents[activeTab.value])
</script>
