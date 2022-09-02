import axios, { type AxiosInstance } from 'axios'
import {
  errorInterceptor,
  requestErrorInterceptor,
  requestInterceptor,
  responseInterceptor
} from './interceptors'

class HttpService {
  instance = {} as AxiosInstance

  constructor (apiUrl: string) {
    this.createAxiosInstance(apiUrl)
    this.registerInterceptors()
  }

  private createAxiosInstance (apiUrl: string) {
    this.instance = axios.create({
      baseURL: apiUrl
    })
  }

  private registerInterceptors () {
    this.instance.interceptors.response.use(
      res => responseInterceptor(res),
      err => errorInterceptor(err)
    )

    this.instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
  }
}

export const useHttp = new HttpService(import.meta.env.VITE_API_URL).instance
