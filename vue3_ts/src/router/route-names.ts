import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { veevalidateYupRouteNames } from '@/views/veevalidate-yup/veevalidate-yup.routes'

export const routesNames = {
  rootPage: 'rootPage',
  auth: 'auth',
  veevalidateYup: 'veevalidateYup',

  ...exampleViewRouteNames,
  ...authRouteNames,
  ...veevalidateYupRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
