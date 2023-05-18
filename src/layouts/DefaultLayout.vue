<template>
  <!--
    This layout is just an example.
    Please create your own depending on your projects needs
  -->
  <div class="h-full overflow-hidden max-w-[1440px]">
    <aside class="left-sidebar fixed px-6 left-0 w-[320px] py-3  top-0 bottom-0 border-r border-border-primary">
      <slot name="leftSidebarContent" />
    </aside>
    <header class="header fixed top-0 left-[320px] right-0 flex px-6 items-center justify-between h-14">
      <div class="flex gap-24 items-center">
        <h1 class="flex items-center">
          <router-link to="/" class="flex gap-4 items-center font-semibold text-xl leading-8 text-primary">
            <Logo />
            E-message
          </router-link>
        </h1>
        <p class="font-semibold text-sm text-primary">
          Caeser
          <span class="font-normal text-secondary">last seen 5 min ago</span>
        </p>
      </div>
      <div class="flex items-center self-stretch">
        <el-button
          class="h-full header-button px-2 text-2xl leading-none"
          :icon="Dots"
          text
          @click="rightDrawer=true"
        />
        <el-button
          class="h-full header-button px-2 text-xl leading-none"
          :icon="Gear"
          text
        />
        <div class="px-2 h-full flex items-center">
          <el-avatar :size="32" src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" fill="cover" />
        </div>
      </div>
    </header>
    <el-drawer
      v-model="rightDrawer"
      size="280px"
      :modal="false"
      :lock-scroll="false"
      :style="{top: '58px', position: 'fixed', zIndex: '3000'}"
      class="drawer"
      :show-close="false"
    >
      <template #header="{ close, titleId }">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <el-avatar :id="titleId" :size="24" src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" fill="cover" />
            <span class="text-base font-semibold text-primary">Caesar</span>
          </div>
          <el-button text circle @click="close">
            <el-icon class="text-xl leading-none">
              <CloseCross />
            </el-icon>
          </el-button>
        </div>
      </template>
      <el-divider class="my-4" />
      <div class="flex flex-col gap-4 text-primary">
        <div class="flex flex-col gap-2">
          <span class="font-semibold text-sm">Username</span>
          <span class="text-sm">@Caesar</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="font-semibold text-sm">Bio</span>
          <span class="text-sm">I like talk shows</span>
        </div>
      </div>
      <el-divider class="my-4" />
      <div class="flex justify-between items-center">
        <span class="font-semibold text-sm text-primary">Notifications</span>
        <el-switch />
      </div>
      <el-divider class="my-4" />
      <div class="flex flex-col">
        <el-button class="justify-start" type="primary" text>Block user</el-button>
        <el-button class="justify-start" type="primary" text>Clear history</el-button>
        <el-button class="justify-start" type="primary" text>Delete conversation</el-button>
      </div>
    </el-drawer>
    <div class="pl-[320px] pt-14 pr-[280px]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Dots from '@/components/icons/Dots.vue'
import Gear from '@/components/icons/Gear.vue'
import CloseCross from '@/components/icons/CloseCross.vue'

const rightDrawer = ref(false)
</script>

<style lang="scss">
.header {
  box-shadow: 0px 1px 2px rgba(2, 17, 37, 0.12);
}

.left-sidebar {
  box-shadow: 0px 0px 4px rgba(2, 17, 37, 0.04), 2px 0px 8px rgba(2, 17, 37, 0.04), 6px 0px 16px rgba(2, 17, 37, 0.04);
}
.el-button {
  margin: 0 !important;
}

.search-input {
  .el-input__prefix {
    font-size: 20px !important;
  }
}

.operational-drawer-modal {
  all: unset !important;
}

.operational-drawer {
  position:fixed;
  z-index: 3000;
  top: 56px;
}

.drawer {
  box-shadow:
  0px 0px 4px rgba(2, 17, 37, 0.08), -2px 0px 8px rgba(2, 17, 37, 0.08), -6px 0px 16px rgba(2, 17, 37, 0.04);
  border-radius: 16px 0px 0px 0px;
  border-left: 1px solid #CDD5DE;
}

.el-drawer__header {
  padding: 16px 24px;
  padding-bottom: 0;
  margin-bottom: 0;
}

.el-drawer__body {
  padding: 0 24px;
}
</style>
