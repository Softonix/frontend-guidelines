import 'vue-router'
import { EPortalNames } from '@/plugins'

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'vue-router' {
//   interface RouteMeta {
//     label?: string;
//     icon?: string;
//   }
// }

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $portalNames: typeof EPortalNames
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Storage {
    hasKey(key: string): boolean;
    setItem(key: string, value: any): void;
  }
}
