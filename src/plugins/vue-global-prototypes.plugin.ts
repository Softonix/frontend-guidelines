import type { Plugin } from 'vue'
import { routeNames } from '@/router/route-names'
import { EComponentSize, EComponentType } from '@/types'

export const VueGlobalPrototypesPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$componentSize = EComponentSize
    app.config.globalProperties.$componentType = EComponentType
    app.config.globalProperties.$routeNames = routeNames
  }
}
