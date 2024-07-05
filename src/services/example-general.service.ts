class ExampleGeneralService {
  getSomeData () {
    return useApiClient.get('/api/v1/Books')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
