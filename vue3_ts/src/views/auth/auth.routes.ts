import { RouteRecordRaw } from 'vue-router'

export const authRouteNames = {
  login: 'login',
  signUp: 'signUp'
}

export const authRoutes: Array<RouteRecordRaw> = [
  {
    path: 'login',
    name: authRouteNames.login,
    component: () => import('./Login.vue')
  },
  {
    path: 'sign-up',
    name: authRouteNames.signUp,
    component: () => import('./SignUp.vue')
  }
]
