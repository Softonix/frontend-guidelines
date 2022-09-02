// import { httpService } from '@/services'
import type { IExampleInterface } from '@/types'

class ExampleGeneralService {
  getSomeData (): Promise<IExampleInterface> {
    return useHttp.get('/posts/1')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
