class ExampleGeneralService {
  getSomeData () {
    return useApiClient.get('/api/attachments/')
  }
}

export const exampleGeneralService = new ExampleGeneralService()
