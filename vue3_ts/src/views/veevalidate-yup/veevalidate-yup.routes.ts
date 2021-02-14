import { RouteRecordRaw } from 'vue-router'

export const veevalidateYupRouteNames = {
  modelExample: 'modelExample',
  eventsExample: 'eventsExample',
  manuallyErrors: 'manuallyErrors',
  formExample: 'formExample',
  customComponents: 'customComponents'
}

export const veevalidateYupRoutes: Array<RouteRecordRaw> = [
  {
    path: 'model',
    name: veevalidateYupRouteNames.modelExample,
    component: () => import('./ModelExample.vue')
  },

  {
    path: 'events',
    name: veevalidateYupRouteNames.eventsExample,
    component: () => import('./EventsExample.vue')
  },

  {
    path: 'manually-errors',
    name: veevalidateYupRouteNames.manuallyErrors,
    component: () => import('./ManuallyErrors.vue')
  },

  {
    path: 'form-example',
    name: veevalidateYupRouteNames.formExample,
    component: () => import('./FormExample.vue')
  },

  {
    path: 'custom-components',
    name: veevalidateYupRouteNames.customComponents,
    component: () => import('./CustomComponents.vue')
  }
]
