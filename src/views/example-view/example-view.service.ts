import type { IExampleInterface } from '@/types'

class ExampleViewService {
  getSomeData (): Promise<IExampleInterface> {
    return useHttp.get('/posts/1')
  }
}

export const exampleViewService = new ExampleViewService()
