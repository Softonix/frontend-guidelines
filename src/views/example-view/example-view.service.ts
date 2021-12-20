// import { httpService } from '@/services'
import { IExampleInterface } from '@/types'

class ExampleViewService {
  getSomeData (): Promise<IExampleInterface> {
    // return httpService.get('/some-url')

    // todo: the code below is just an example, use the one above
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          a: 'some string',
          b: 2
        })
      }, 1000)
    })
  }
}

export const exampleViewService = new ExampleViewService()
