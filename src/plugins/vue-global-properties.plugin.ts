import type { Plugin } from 'vue'
import { routeNames } from '@/router/route-names'

export const globalProperties = {
  $elComponentSize: {
    small: 'small',
    default: 'default',
    large: 'large'
  },
  $elComponentType: {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info'
  },
  $routeNames: routeNames
}

export const VueGlobalPropertiesPlugin: Plugin = {
  install: (app) => {
    for (const i in globalProperties) {
      app.config.globalProperties[i] = globalProperties[i as keyof typeof globalProperties]
    }
  }
}
