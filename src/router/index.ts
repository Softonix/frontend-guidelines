import { createRouter, createWebHistory } from 'vue-router'

import { routeGuard } from './route-guard'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)
