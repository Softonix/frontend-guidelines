import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import { routeNames } from './route-names'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // todo: please write your own route guard
  const authStore = useAuthStore()

  if (!to.meta.requireAuth || authStore.isAuthenticated) {
    return next()
  } else {
    return next({ name: routeNames.login })
  }
}
