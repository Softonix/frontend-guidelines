import { AxiosResponse } from 'axios'
// Optional. This example returns data from response object
export const responseInterceptor = (response: AxiosResponse) => {
  return response.data
}
