import { http } from '@/services'
import { IExampleView } from '@/views/example-view/example-view.types'

class ExampleGeneralService {
  getSomeData (): Promise<IExampleView[]> {
    return http.get('/some-url')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
