import { http } from '@/services'
import { ILoginType } from './veevalidate-yup.types'

const prefix = 'auth'

class VeevalidateYupService {
  login (data: ILoginType) {
    return http.post(`/${prefix}/login`, data)
  }
}

export const veevalidateYupService = new VeevalidateYupService()
