import './core/utils/global-prototypes.utils'

import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store/create-store'
import {
  PortalPlugin,
  I18nPlugin,
  ElementPlugin,
  VueGlobalPrototypesPlugin
} from '@/plugins'

import '@/assets/styles/main.scss'
import '@/assets/styles/element-reset/index.scss'

import './registerServiceWorker'

export const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(PortalPlugin)
  .use(I18nPlugin)
  .use(ElementPlugin)
  .use(VueGlobalPrototypesPlugin)

router.isReady().then(() => {
  app.mount('#app')
})
