<template>
  <!--
    This layout is just an example.
    Please create your own depending on your projects needs
  -->
  <div class="h-full overflow-hidden max-w-[1440px]">
    <LeftSidebar :open="leftSidebarOpen" @onClose="leftSidebarOpen=false" />
    <Header @onMenuClick="leftSidebarOpen=!leftSidebarOpen" @onInfoClick="rightDrawer=true" />
    <RightSidebar v-model="rightDrawer" />
    <div class="md:pl-[240px] lg:pl-[320px] pt-14 h-full px-0 ">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftSidebar from '@/components/LeftSidebar.vue'
import Header from '@/components/Header.vue'
import RightSidebar from '@/components/RightSidebar.vue'

const rightDrawer = ref(false)
const leftSidebarOpen = ref(false)
</script>
