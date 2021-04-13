import { AxiosError } from 'axios'

export const errorInterceptor = async (error: AxiosError) => {
  // global error handler
  return Promise.reject(error)
}
