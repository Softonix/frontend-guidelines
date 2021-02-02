import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'
import { authRouteNames } from '@/views/auth/auth.routes'

export const routesNames = {
  rootPage: 'root-page',
  auth: 'auth',

  ...exampleViewRouteNames,
  ...authRouteNames,

  additionalDefaultLayoutRoute: 'additional-default-layout-route',
  additionalNoLayoutRoute: 'additional-no-layout-route'
}
