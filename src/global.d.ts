import 'vue-router'
import { routeNames } from '@/router'
import { EPortalNames, FontAwesomeIconsList } from '@/plugins'
import { DateTimeFormatResult } from 'vue-i18n'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { EComponentSize, EComponentType } from '@/types'
import { filters } from '@/core/filters'

/* eslint-disable */
declare module 'vue-router' {
  interface RouteMeta {
    // todo: this is just an example. Please setup your own route meta params.
    label?: string;
    icon?: IconDefinition
    parentName?: string
    requireAuth?: boolean
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    // todo: Here you define you global vue definitions.
    $portalNames: typeof EPortalNames
    $routeNames: typeof routeNames
    $icons: typeof FontAwesomeIconsList
    $filters: typeof filters
    $df: (date: number | string | Date, type: 'short' | 'long' | 'narrow' = 'short') => DateTimeFormatResult

    // todo: These ones are used only for element library for size and type props;
    $componentSize: typeof EComponentSize
    $componentType: typeof EComponentType
  }
}

declare global {
  interface Storage {
    hasKey(key: string): boolean;

    setItem(key: string, value: any): void;
  }
}
