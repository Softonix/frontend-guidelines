import { object, string, ref, SchemaOf } from 'yup'
import { VALIDATION } from '@/core/enums'
import { ILoginType } from './veevalidate-yup.types'

export const emailSchema = object({
  email: string().email().required().label('Email')
})

export const passwordSchema = object({
  password: string().min(6).max(32).required().matches(
    /^(?=.{8,}$)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).*$/,
    VALIDATION.PASSWORD
  ).label('Password')
})

export const signUpSchema = object({
  confirmPassword: string()
    .min(6)
    .max(64)
    .required()
    .oneOf([ref('password')], VALIDATION.PASSWORD_CONFIRMATION)
    .label('Confirm password'),
  ...emailSchema.fields,
  ...passwordSchema.fields
})

export const loginSchema: SchemaOf<ILoginType> = object({
  ...emailSchema.fields,
  ...passwordSchema.fields
})
