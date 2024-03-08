import type { AxiosRequestConfig } from 'axios'

class ExampleViewService {
  getSomeData (id = 1, config: AxiosRequestConfig = {}) {
    return useHttp.get<IExampleInterface>(`/posts/${id}`, { ...config })
  }
}

export const exampleViewService = new ExampleViewService()
