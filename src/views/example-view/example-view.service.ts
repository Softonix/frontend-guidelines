class ExampleViewService {
  getSomeData (id = 1) {
    return useApiClient.get('/api/v1/Books/{id}', {
      dynamicKeys: {
        id
      }
    })
  }
}

export const exampleViewService = new ExampleViewService()
