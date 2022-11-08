class ExampleViewService {
  getSomeData () {
    return useHttp.get<IExampleInterface>('/posts/1')
  }
}

export const exampleViewService = new ExampleViewService()
