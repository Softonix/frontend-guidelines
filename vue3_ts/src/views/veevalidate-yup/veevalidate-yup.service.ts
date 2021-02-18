import { http } from '@/services'
import { IVeeValidateLogin } from '@/types'

const prefix = 'auth'

class VeevalidateYupService {
  login (data: IVeeValidateLogin) {
    return http.post(`/${prefix}/login`, data)
  }
}

export const veevalidateYupService = new VeevalidateYupService()
