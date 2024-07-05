// --------------------------------------------- F O R M  R E F --------------------------------------------------------
export function useElFormRef (initialValue: any = null) {
  return ref<TElementPlus['FormInstance']>(initialValue)
}

// --------------------------------------------- F O R M  M O D E L ----------------------------------------------------
export function useElFormModel<T extends object> (model: T) {
  return reactive<T>(model)
}

// ------------------------------------------- F O R M  R U L E S ------------------------------------------------------
export function useElFormRules (model: TElementPlus['FormRules']) {
  return reactive(model)
}

export function useRequiredRule ({ required = true } = {}) {
  const { t } = useI18n()
  return { required, message: t('validation.required'), trigger: 'change' } as TElementPlus['FormItemRule']
}

export function useEmailRule () {
  const { t } = useI18n()
  return { type: 'email', message: t('validation.email'), trigger: ['change', 'blur'] } as TElementPlus['FormItemRule']
}

export function useMinLenRule (min: number): TElementPlus['FormItemRule'] {
  const { t } = useI18n()
  return { min, message: t('validation.minLength', { number: min }), trigger: 'change' }
}

export function useMaxLenRule (max: number): TElementPlus['FormItemRule'] {
  const { t } = useI18n()
  return { max, message: t('validation.maxLength', { number: max }), trigger: 'change' }
}
