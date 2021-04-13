import { AxiosError, AxiosResponse } from 'axios'

const unwrapResponseInterceptor = (response: AxiosResponse): Promise<AxiosResponse> => {
  return response.data
}

const responseErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

export {
  unwrapResponseInterceptor,
  responseErrorInterceptor
}
