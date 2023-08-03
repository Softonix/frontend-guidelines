import type { RouteRecordRaw } from 'vue-router'

export const VueFeatureRouteNames = {
  home: 'home',
  typesSupport: 'typesSupport',
  genericComponent: 'genericComponent',
  typedSlots: 'typedSlots',
  defineOption: 'defineOption',
  propsDestructure: 'propsDestructure',
  defineModel: 'defineModel',
  ergonomicEmits: 'ergonomicEmits'
}

export const vueFeatureRoutes: Array<RouteRecordRaw> = [
  {
    path: 'home',
    name: VueFeatureRouteNames.home,
    meta: {
      label: 'home'
    },
    component: () => import('./HomePage.vue')
  },
  {
    path: 'types-support',
    name: VueFeatureRouteNames.typesSupport,
    meta: {
      label: 'types Support'
    },
    component: () => import('./ImportedTypes.vue')
  },
  {
    path: 'generic-component',
    name: VueFeatureRouteNames.genericComponent,
    meta: {
      label: 'generic Component'
    },
    component: () => import('./GenericComponent.vue')
  },
  {
    path: 'define-option',
    name: VueFeatureRouteNames.defineOption,
    meta: {
      label: 'defineOption'
    },
    component: () => import('./DefineOption.vue')
  },
  {
    path: 'typed-slots',
    name: VueFeatureRouteNames.typedSlots,
    meta: {
      label: 'typed Slots'
    },
    component: () => import('./TypedSlots.vue')
  },
  {
    path: 'props-destructure',
    name: VueFeatureRouteNames.propsDestructure,
    meta: {
      label: 'props Destructure*'
    },
    component: () => import('./PropsDestructure.vue')
  },
  {
    path: 'define-model',
    name: VueFeatureRouteNames.defineModel,
    meta: {
      label: 'defineModel*'
    },
    component: () => import('./DefineModel.vue')
  },
  {
    path: 'ergonomic-emits',
    name: VueFeatureRouteNames.ergonomicEmits,
    meta: {
      label: 'Ergonomic Emits'
    },
    component: () => import('./ErgonomicEmits.vue')
  }
]
