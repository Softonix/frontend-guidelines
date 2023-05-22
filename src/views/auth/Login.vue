<template>
  <div
    class="min-h-screen flex m-auto sm:items-center
   gap-20 pt-20 sm:pt-0 px-4 md:px-16 flex-col sm:flex-row items-stretch"
  >
    <el-form class="flex-1 flex flex-col sm:block " label-position="top">
      <h1 class="font-semibold text-4xl text-center mb-10">Log In</h1>
      <el-form-item label="Email">
        <el-input />
      </el-form-item>
      <el-form-item label="Password">
        <el-input />
      </el-form-item>
      <el-form-item class="mt-auto sm:mt-10">
        <div class="sm:ml-auto w-full sm:w-auto">
          <el-button
            class="w-full"
            :type="$elComponentType.primary"
          >
            Log In
          </el-button>
        </div>
      </el-form-item>
    </el-form>
    <Logo class="relative flex-1 h-screen hidden lg:block" />
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/components/icons/Logo.vue'
</script>
