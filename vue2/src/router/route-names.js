import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'
import { authRouteNames } from '@/views/auth/auth.routes'

export const routesNames = {
  rootPage: 'rootPage',
  auth: 'auth',

  ...exampleViewRouteNames,
  ...authRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
