<template>
  <h1 class="hidden md:flex items-center">
    <router-link to="/" class="flex gap-4 items-center font-semibold text-xl leading-8 text-primary">
      <Logo />
      E-message
    </router-link>
  </h1>
</template>

<script lang="ts" setup>
import Logo from '@/components/icons/Logo.vue'
</script>
