import type { RouteRecordRaw } from 'vue-router'

export const transitionViewRouteNames = {
  fade: 'fade',
  slide: 'slide',
  gallery: 'gallery'
}

export const transitionViewRoutes: Array<RouteRecordRaw> = [
  {
    path: 'fade',
    name: transitionViewRouteNames.fade,
    component: () => import('./Fade.vue')
  },
  {
    path: 'slide',
    name: transitionViewRouteNames.slide,
    component: () => import('./Slide.vue')
  },
  {
    path: 'gallery',
    name: transitionViewRouteNames.gallery,
    component: () => import('./Gallery.vue')
  }
]
