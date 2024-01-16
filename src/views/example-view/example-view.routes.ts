import type { RouteRecordRaw } from 'vue-router'
import { transitionViewRouteNames, transitionViewRoutes } from './transitions/transitions.routes'

export const exampleViewRouteNames = {
  exampleGeneral: 'exampleGeneral',
  exampleColors: 'exampleColors',
  exampleFlags: 'exampleFlags',
  exampleTransitions: 'exampleTransitions',
  exampleCss: 'exampleCss',
  exampleLazyLoading: 'exampleLazyLoading',
  exampleAccessibility: 'exampleAccessibility',
  exampleWebWorker: 'exampleWebWorker',
  exampleCustomCheckbox: 'exampleCustomCheckbox'
}

export const exampleViewRoutes: Array<RouteRecordRaw> = [
  {
    path: 'general',
    name: exampleViewRouteNames.exampleGeneral,
    meta: {
      label: 'general.navigation.exampleGeneral' // translation key
    },
    component: () => import('./general/GeneralView.vue')
  },
  {
    path: 'example-lazy-loading',
    name: exampleViewRouteNames.exampleLazyLoading,
    meta: {
      label: 'Lazy Loading Example'
    },
    component: () => import('./ExampleLazyLoading.vue')
  },
  {
    path: 'example-colors',
    name: exampleViewRouteNames.exampleColors,
    component: () => import('./ExampleColors.vue'),
    meta: {
      label: 'Colors'
    }
  },
  {
    path: 'example-flags',
    name: exampleViewRouteNames.exampleFlags,
    component: () => import('./ExampleFlags.vue'),
    meta: {
      label: 'Flags'
    }
  },
  {
    path: 'example-transitions',
    name: exampleViewRouteNames.exampleTransitions,
    component: () => import('./transitions/Transition.vue'),
    meta: {
      label: 'Transitions'
    },
    redirect: { name: transitionViewRouteNames.fade },
    children: transitionViewRoutes
  },
  {
    path: 'example-css',
    name: exampleViewRouteNames.exampleCss,
    component: () => import('./css-features/ExampleCss.vue'),
    meta: {
      label: 'Css Examples'
    }
  },
  {
    path: 'example-accessibility',
    name: exampleViewRouteNames.exampleAccessibility,
    component: () => import('./accessibility/ExampleAccessibility.vue'),
    meta: {
      label: 'Accessibility'
    }
  },
  {
    path: 'web-worker',
    name: exampleViewRouteNames.exampleWebWorker,
    component: () => import('./web-worker/ExampleWebWorker.vue'),
    meta: {
      label: 'Web Worker'
    }
  },
  {
    path: 'custom-checkbox',
    name: exampleViewRouteNames.exampleCustomCheckbox,
    component: () => import('./custom-checkbox/CustomCheckboxView.vue'),
    meta: {
      label: 'Custom Checkbox'
    }
  }
]
