import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  requestInterceptor,
  requestErrorInterceptor,
  unwrapResponseInterceptor,
  responseErrorInterceptor
} from './interceptors'

class HttpService {
  readonly apiUrl: string
  private axios = {} as AxiosInstance

  constructor (apiUrl: string) {
    this.apiUrl = apiUrl + '/api'
    this.createAxiosInstance()
    this.registerInterceptors()
  }

  get<T> (url: string, config?: AxiosRequestConfig): Promise<T> {
    const parsedUrl = url.includes('http') ? url : this.apiUrl + url
    return this.axios.get(parsedUrl, config)
  }

  put<T> (url: string, payload: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.axios.put(url, payload, config)
  }

  post<T> (url: string, payload?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.axios.post(this.apiUrl + url, payload, config)
  }

  patch<T> (url: string, payload: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.axios.patch(this.apiUrl + url, payload, config)
  }

  private createAxiosInstance () {
    this.axios = axios.create()
  }

  private registerInterceptors () {
    this.axios.interceptors.response.use(
      (res: AxiosResponse) => unwrapResponseInterceptor(res),
      (err: AxiosError) => responseErrorInterceptor(err)
    )

    this.axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
  }
}

export const httpService = new HttpService(process.env.VUE_APP_API_URL as string)
