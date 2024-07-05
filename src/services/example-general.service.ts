class ExampleGeneralService {
  getSomeData () {
    return useApiClient.get('/api/v1/Activities')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
