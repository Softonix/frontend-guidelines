class ExampleViewService {
  getSomeData (id = 1) {
    return useHttp.get<IExampleInterface>(`/posts/${id}`)
  }
}

export const exampleViewService = new ExampleViewService()
