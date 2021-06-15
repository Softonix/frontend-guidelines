import './core/utils/global-prototypes.utils'

import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store/create-store'
import { PortalPlugin, VueGlobalPrototypesPlugin } from '@/plugins'

import '@/assets/styles/main.scss'

export const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(PortalPlugin)
  .use(VueGlobalPrototypesPlugin)

router.isReady().then(() => {
  app.mount('#app')
})
