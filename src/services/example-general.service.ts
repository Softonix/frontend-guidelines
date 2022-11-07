import type { IExampleInterface } from '@/types'

class ExampleGeneralService {
  getSomeData () {
    return useHttp.get<IExampleInterface>('/posts/1')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
