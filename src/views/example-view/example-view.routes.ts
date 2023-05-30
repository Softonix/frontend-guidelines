import type { RouteRecordRaw } from 'vue-router'
import { transitionViewRouteNames, transitionViewRoutes } from './transitions/transitions.routes'

export const exampleViewRouteNames = {
  exampleView: 'exampleView',
  exampleColors: 'exampleColors',
  exampleFlags: 'exampleFlags',
  exampleTransitions: 'exampleTransitions'
}

export const exampleViewRoutes: Array<RouteRecordRaw> = [
  {
    path: 'example',
    name: exampleViewRouteNames.exampleView,
    meta: {
      label: 'general.navigation.exampleView' // translation key
    },
    component: () => import('./ExampleView.vue')
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
  }
]
