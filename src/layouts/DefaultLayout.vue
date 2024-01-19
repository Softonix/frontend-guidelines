<template>
  <!--
    This layout is just an example.
    Please create your own depending on your projects needs
  -->
  <div class="default-layout flex flex-col h-full overflow-hidden">
    <header
      class="header p-4 bg-orange-200 text-white capitalize shadow flex items-center" data-testid="page-header"
    >
      <div class="w-40 mr-10">
        <img src="/images/logo.png" alt="logo">
      </div>

      <FF name="FF-SX-1234-TEST" show-badge>
        <el-button type="primary" plain class="ml-3">Test</el-button>
      </FF>

      <PortalTarget :name="$portalNames.header" />
    </header>

    <div class="flex flex-grow overflow-hidden">
      <Sidebar />

      <div class="flex-1 overflow-auto p-4">
        <router-view />
      </div>
    </div>

    <footer class="p-4 bg-red-200 capitalize shrink-0">example footer</footer>
  </div>
</template>

<style lang="scss" scoped>
  .default-layout:has(.alert) .header {
    @apply border-b-2 border-danger bg-red-200
  }
</style>
