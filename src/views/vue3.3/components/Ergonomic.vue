<template>
  <div>
    <AppButton
      :type="$buttonType.primary"
      :size="$buttonSize.large"
      class="w-1/5 border text-primary rounded-sm"
      @click="$emit('showData', 15, 'test')"
    >
      Apply
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'showData', testValue: number, testString: string): void
}>()

// defineEmits<{
//   showData: [testValue: number, testString: string]
// }>()
</script>
