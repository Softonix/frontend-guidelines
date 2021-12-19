import { createRouter, createWebHistory, RouteRecordRaw, onBeforeRouteUpdate, useRoute } from 'vue-router'

import { routesNames } from './route-names'
import { routeGuard } from './route-guard'

import { exampleViewRoutes } from '@/views/example-view/example-view.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { veevalidateYupRoutes } from '@/views/veevalidate-yup/veevalidate-yup.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  ...authRoutes,

  {
    path: '/',
    name: routesNames.rootPage,
    redirect: { name: routesNames.exampleView },
    component: DefaultLayout,
    children: [ // list of views that use default layout
      ...exampleViewRoutes,
      ...veevalidateYupRoutes
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)

export {
  routesNames,
  routes,
  onBeforeRouteUpdate,
  useRoute
}
