<template>
  <el-button :type="$elComponentType.danger" text @click="logOut()">Log Out</el-button>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/views/auth/auth.store'

const { logOut } = useAuthStore()
</script>
