import { object, string, ref, SchemaOf } from 'yup'
import { EValidation, IVeeValidateLogin } from '@/types'

export const emailSchema = object({
  email: string().email().required().label('Email')
})

export const passwordSchema = object({
  password: string().min(6).max(32).required().matches(
    /^(?=.{8,}$)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).*$/,
    EValidation.PASSWORD
  ).label('Password')
})

export const signUpSchema = object({
  confirmPassword: string()
    .min(6)
    .max(64)
    .required()
    .oneOf([ref('password')], EValidation.PASSWORD_CONFIRMATION)
    .label('Confirm password'),
  ...emailSchema.fields,
  ...passwordSchema.fields
})

export const loginSchema: SchemaOf<IVeeValidateLogin> = object({
  ...emailSchema.fields,
  ...passwordSchema.fields
})
