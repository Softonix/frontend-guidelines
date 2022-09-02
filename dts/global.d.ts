import 'vue-router'
import { routeNames } from '@/router'
import { EPortalNames } from '@/plugins'
import { EComponentSize, EComponentType } from '@/types'

declare module 'vue-router' {
  interface RouteMeta {
    // todo: this is just an example. Please setup your own route meta params.
    label?: string;
    parentName?: string
    requireAuth?: boolean
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    // todo: Here you define you global vue definitions.
    $portalNames: typeof EPortalNames
    $routeNames: typeof routeNames

    // todo: These ones are used only for element library for size and type props;
    $componentSize: typeof EComponentSize
    $componentType: typeof EComponentType
  }
}