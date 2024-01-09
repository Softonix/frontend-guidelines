import type { AxiosError, InternalAxiosRequestConfig } from 'axios'

// Todo: the following code is just an example. Please write your own project specific interceptors
const requestInterceptor = (requestConfig: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // requestConfig.headers.Authorization = `Bearer ${modules.user.tokenInfo.accessToken}`
  return requestConfig
}

const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

export {
  requestInterceptor,
  requestErrorInterceptor
}
