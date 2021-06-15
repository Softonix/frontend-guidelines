import { Plugin } from 'vue'
import { EPortalNames } from '@/plugins/portal'

export const VueGlobalPrototypesPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$portalNames = EPortalNames
  }
}
