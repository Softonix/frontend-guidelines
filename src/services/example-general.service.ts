class ExampleGeneralService {
  getSomeData () {
    // return useHttp.get<IExampleInterface>('/posts/1')
    return useHttp.get('/posts/1')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
