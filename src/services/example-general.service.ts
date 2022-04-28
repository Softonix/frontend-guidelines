// import { httpService } from '@/services'
import { IExampleInterface } from '@/types'

class ExampleGeneralService {
  getSomeData (): Promise<IExampleInterface> {
    // return httpService.get('/some-url')

    // todo: the code below is just an example, use the one above
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          a: 'some general string',
          b: 10
        })
      }, 1000)
    })
  }
}

export const exampleGeneralService = new ExampleGeneralService()
