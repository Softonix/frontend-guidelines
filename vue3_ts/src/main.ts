import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store'
import { PortalPlugin } from '@/plugins'

import '@/assets/styles/main.scss'

export const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(PortalPlugin)

router.isReady().then(() => {
  app.mount('#app')
})
