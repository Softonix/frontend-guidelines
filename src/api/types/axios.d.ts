import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios'

export interface TAxiosRequestConfig<Path extends TPathKeys = string, Method extends TPathMethods<Path> = string> extends AxiosRequestConfig  {
  params?: TRequestParameters<Path, Method>['query']
}

declare module 'axios' {
  export interface InternalAxiosRequestConfig extends TAxiosRequestConfig {}

  export interface AxiosInstance {
    get<Path extends TPathKeys>(url: Path, config?: TAxiosRequestConfig<Path, 'get'>): Promise<TResponse<Path, 'get'>>
    post<Path extends TPathKeys>(url: Path, data?: TRequestBody<Path, 'post'>, config?: TAxiosRequestConfig<Path, 'post'>): Promise<TResponse<Path, 'post'>>
    put<Path extends TPathKeys>(url: Path, data?: TRequestBody<Path, 'put'>, config?: TAxiosRequestConfig<Path, 'put'>): Promise<TResponse<Path, 'put'>>
    patch<Path extends TPathKeys>(url: Path, data?: Partial<TRequestBody<Path, 'patch'>>, config?: TAxiosRequestConfig<Path, 'patch'>): Promise<TResponse<Path, 'patch'>>
    delete<Path extends TPathKeys>(url: Path, config?: TAxiosRequestConfig<Path, 'delete'>): Promise<TResponse<Path, 'delete'>>
  }
}
