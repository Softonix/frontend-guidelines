import { AxiosRequestConfig } from 'axios'

export const requestInterceptor = async (requestConfig: AxiosRequestConfig) => {
  // some request handler, eg registering token for every request
  // requestConfig.headers.Authorization = `${store.user.state.token}`

  return requestConfig
}
