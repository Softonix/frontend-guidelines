<template>
  <div
    class="min-h-screen flex m-auto sm:items-center
   gap-10 pt-20 sm:pt-0 px-4 md:px-16 flex-col sm:flex-row items-stretch"
  >
    <el-form class="flex-1 flex flex-col sm:block" label-position="top">
      <h1 class="font-semibold text-4xl text-center mb-10">Register</h1>
      <el-form-item label="Email">
        <el-input />
      </el-form-item>
      <el-form-item label="Password">
        <el-input />
      </el-form-item>
      <p>
        Already have an account?
        <router-link class="text-link-primary " :to="{name: $routeNames.login}">Log In</router-link>
      </p>
      <el-form-item class="mt-auto sm:mt-10">
        <div class="sm:ml-auto w-full sm:w-auto">
          <el-button
            class="w-full"
            :type="$elComponentType.primary"
          >
            Sign Up
          </el-button>
        </div>
      </el-form-item>
    </el-form>
    <div class="relative flex-[1.5] h-screen hidden lg:block">
      <img
        class="absolute top-1/2 -translate-y-1/2 w-[1024px] shadow-2xl"
        src="/images/auth-img-1.png"
        alt="White theme"
      >
      <img
        class="absolute top-1/2 -translate-y-1/4 w-[1024px] translate-x-7 shadow-2xl"
        src="/images/auth-img-2.png"
        alt="Dark theme"
      >
    </div>
  </div>
</template>
