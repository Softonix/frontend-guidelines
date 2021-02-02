export const authRouteNames = {
  login: 'login',
  signUp: 'sign-up'
}

export const authRoutes = [
  {
    path: 'login',
    name: authRouteNames.login,
    component: () => import('./Login')
  },
  {
    path: 'sign-up',
    name: authRouteNames.signUp,
    component: () => import('./SignUp')
  }
]
