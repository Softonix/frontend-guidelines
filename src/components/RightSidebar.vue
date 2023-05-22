<template>
  <el-drawer
    :modelValue="modelValue"
    size="280px"
    :modal="false"
    :lock-scroll="false"
    :style="{top: '58px', position: 'fixed', zIndex: '3000'}"
    class="drawer"
    :show-close="false"
    @open="$emit('update:modelValue', true)"
    @close="$emit('update:modelValue', false)"
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
</template>

<script lang="ts" setup>
import CloseCross from '@/components/icons/CloseCross.vue'

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
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
  margin-bottom: 0 !important;
}

.el-drawer__body {
  padding: 0 24px;
}
</style>
