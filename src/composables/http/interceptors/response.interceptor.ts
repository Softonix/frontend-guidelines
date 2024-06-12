import axios from 'axios'
import type { AxiosError, AxiosResponse } from 'axios'
// Todo: the following code is just an example. Please write your own project specific interceptors

const responseInterceptor = (response: AxiosResponse): Promise<AxiosResponse> => {
  return response.data
}

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  // Handle abort errors
  if (axios.isCancel(error)) {
    console.warn('Request canceled:', `${error?.config?.baseURL}${error?.config?.url} ${error.message}`)
  }

  // Everything else
  return Promise.reject(error)
}

export {
  responseInterceptor,
  errorInterceptor
}
