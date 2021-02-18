import { RouteRecordRaw } from 'vue-router'

export const veevalidateYupRouteNames = {
  modelExample: 'modelExample',
  eventsExample: 'eventsExample',
  manuallyErrors: 'manuallyErrors',
  formExample: 'formExample',
  customInput: 'customInput'
}

export const veevalidateYupRoutes: Array<RouteRecordRaw> = [
  {
    path: 'model',
    name: veevalidateYupRouteNames.modelExample,
    component: () => import('./VeeValidateModelExample.vue')
  },

  {
    path: 'events',
    name: veevalidateYupRouteNames.eventsExample,
    component: () => import('./VeeValidateEventsExample.vue')
  },

  {
    path: 'manually-errors',
    name: veevalidateYupRouteNames.manuallyErrors,
    component: () => import('./VeeValidateManuallyErrors.vue')
  },

  {
    path: 'form-example',
    name: veevalidateYupRouteNames.formExample,
    component: () => import('./VeeValidateFormExample.vue')
  },

  {
    path: 'custom-input',
    name: veevalidateYupRouteNames.customInput,
    component: () => import('./VeeValidateCustomInput.vue')
  }
]
