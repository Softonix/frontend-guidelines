import type { AxiosError, AxiosResponse } from 'axios'
// Todo: the following code is just an example. Please write your own project specific interceptors

const responseInterceptor = (response: AxiosResponse): Promise<AxiosResponse> => {
  return response.data
}

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

export {
  responseInterceptor,
  errorInterceptor
}
