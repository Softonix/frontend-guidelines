import { AxiosError, AxiosRequestConfig } from 'axios'

const requestInterceptor = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
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
