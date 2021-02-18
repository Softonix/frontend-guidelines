import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => { next() }
