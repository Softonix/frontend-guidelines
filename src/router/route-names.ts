import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { veevalidateYupRouteNames } from '@/views/veevalidate-yup/veevalidate-yup.routes'

export const routesNames = {
  rootPage: 'rootPage',

  ...exampleViewRouteNames,
  ...authRouteNames,
  ...veevalidateYupRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
