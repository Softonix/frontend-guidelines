import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // todo: please write your own route guard
  next()
}
