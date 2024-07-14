import { i18n } from '@/plugins/i18n'

const { t, locale } = i18n.global

// --------------------------------------------- F O R M  R E F --------------------------------------------------------
export function useElFormRef (initialValue: any = null) {
  const formRef = ref<TElementPlus['FormInstance']>(initialValue)
  watch(locale, async () => {
    await nextTick()
    formRef.value?.fields.forEach(field => {
      if (field.validateState === 'error') {
        formRef.value?.validateField(field.prop)
      }
    })
  })
  return formRef
}

// --------------------------------------------- F O R M  M O D E L ----------------------------------------------------
export function useElFormModel<T extends object> (model: T) {
  return reactive<T>(model)
}

// ------------------------------------------- F O R M  R U L E S ------------------------------------------------------
export function useElFormRules (model: TElementPlus['FormRules']) {
  return reactive(model)
}

export function useRequiredRule ({ required = true } = {}): TElementPlus['FormItemRule'] {
  return { required, message: () => t('validation.required'), trigger: 'change' }
}

export function useEmailRule (): TElementPlus['FormItemRule'] {
  return { type: 'email', message: () => t('validation.email'), trigger: ['change', 'blur'] }
}

export function useMinLenRule (min: number): TElementPlus['FormItemRule'] {
  return { min, message: () => t('validation.minLength', { number: min }), trigger: 'change' }
}

export function useMaxLenRule (max: number): TElementPlus['FormItemRule'] {
  return { max, message: () => t('validation.maxLength', { number: max }), trigger: 'change' }
}
