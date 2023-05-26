<template>
  <div>
    <div>
      {{ message.message }}
    </div>

    <span>{{ new Intl.DateTimeFormat("en-Us", {
            hour: '2-digit',
            minute: '2-digit'

          }).format(new Date(message.created_at)) }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message: any
}>()
</script>
