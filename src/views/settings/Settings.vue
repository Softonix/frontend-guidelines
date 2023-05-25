<template>
  <div class="h-full">
    <header class="flex justify-between shadow-lg mb-12 px-2 py-5">
      <AppLogo class="flex items-center" />

      <div class="flex items-center gap-4">
        <el-button :type="$elComponentType.primary">
          <router-link :to="{name: $routeNames.chat}">Home</router-link>
        </el-button>

        <LogOutButton class="py-5" />
      </div>
    </header>

    <div class="max-w-2xl mx-auto px-2">
      <el-form class="flex flex-col border rounded-3xl bg-gray-100 backdrop-blur-lg px-10 py-10" label-position="top">
        <div class="flex-col sm:flex-row flex justify-between sm:gap-16 items-center">
          <el-form-item class="mb-0">
            <template #label>
              <el-avatar
                after="Choose avatar"
                class="cursor-pointer relative" :size="120"
              >
                <div
                  class="text-xs absolute bottom-0
                    left-50% bg-gray-900
                     bg-opacity-60 backdrop-blur-lg w-full py-2"
                >
                  Upload
                </div>
              </el-avatar>
            </template>

            <el-input class="hidden" type="file" />
          </el-form-item>

          <el-form-item class="w-full sm:w-auto flex-1" label="Username">
            <el-input />
          </el-form-item>
        </div>

        <el-form-item label="Fullname">
          <el-input />
        </el-form-item>

        <el-form-item label="Email">
          <el-input />
        </el-form-item>

        <el-form-item label="Password">
          <el-input />
        </el-form-item>

        <el-form-item label="Bio">
          <el-input type="textarea" rows="3" resize="none" placeholder="Tell more about yourself" />
        </el-form-item>

        <div class="flex justify-end gap-5">
          <el-button :type="$elComponentType.primary">Save</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
