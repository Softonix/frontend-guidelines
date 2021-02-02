export const exampleViewRouteNames = {
  exampleView: 'exampleView',
  exampleViewCreate: 'exampleViewCreate',
  exampleViewDetails: 'exampleViewDetails'
}

export const exampleViewRoutes = [
  {
    path: 'example',
    name: exampleViewRouteNames.exampleView,
    component: () => import('./ExampleView')
  },
  {
    path: 'create',
    name: exampleViewRouteNames.exampleViewCreate,
    component: () => import('./ExampleViewCreate')
  },
  {
    path: ':id/details',
    name: exampleViewRouteNames.exampleViewDetails,
    component: () => import('./ExampleViewDetails')
  }
]
