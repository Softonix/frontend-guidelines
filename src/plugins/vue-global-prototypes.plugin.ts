import { Plugin } from 'vue'
import { EPortalNames } from '@/plugins/portal'

export const VueGlobalPrototypesPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$portalNames = EPortalNames
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $portalNames: typeof EPortalNames
  }
}
