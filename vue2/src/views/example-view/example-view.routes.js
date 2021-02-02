export const exampleViewRouteNames = {
  exampleView: 'example-view',
  exampleViewCreate: 'example-view-create',
  exampleViewDetails: 'example-view-details'
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
