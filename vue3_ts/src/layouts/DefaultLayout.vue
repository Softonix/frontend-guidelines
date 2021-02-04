<template>
  <div>
    <header>example header</header>

    <router-view />

    <footer>example footer</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout'
})
</script>
