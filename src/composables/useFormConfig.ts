import { ComputedRef, reactive, ref } from 'vue'
import { TCallbackFn } from '@/types'
import { ElMessage } from 'element-plus'

// todo: please check how it is used in @/views/Login.vue file

// F O R M   R E F
interface IElFormMethods {
  validate:(callback?: TCallbackFn<[boolean]>) => Promise<boolean>;
  resetFields: () => void
  validateField: (props: string | Array<string>, callback?: TCallbackFn<[boolean]>) => void
  clearValidate: (props?: string | string[]) => void
}

function useElFormRef (initialValue: any = null) {
  return ref<IElFormMethods>(initialValue)
}

// F O R M   F I E L D S   A N D  R U L E S
export function useFormConfig<T extends string> (form: {[key in T]: {
  label: string,
  required?: boolean | ComputedRef<boolean>
  type?: string
  trigger?: string | string[]
  message?: string
  email?: boolean
  minChar?: number
  maxChar?: number
  rules?: any[]
}}) {
  // Generates entries from passed form
  const formEntries = (Object.entries(form) as Array<[keyof typeof form, typeof form[T]]>)

  // Generates typed models and their rules
  const mappedFormEntries = formEntries.reduce((
    acc,
    [key, value]
  ) => {
    // G E N E R A T E   R U L E S
    const currentRules = acc.rules[key] = acc.rules[key] || []

    if (!value.rules) {
      if (value.required) {
        const rule = {
          required: true,
          message: value.type === 'array'
            ? `Please select at least one ${value.label.toLowerCase()}`
            : `${value.label} field is required`,
          trigger: 'blur',
          ...value
        }
        currentRules.push(rule)
      }

      if (value.email) {
        currentRules.push(
          { type: 'email', message: 'Please input correct email address format', trigger: ['blur', 'change'], ...value }
        )
      }

      if (value.type === 'number') {
        currentRules.push(
          { type: 'number', message: 'Please input only digits', trigger: ['blur', 'change'], ...value }
        )
      }

      if (value.minChar && !value.maxChar) {
        currentRules.push({
          min: value.minChar,
          message: `${value.label} should have more than ${value.minChar} characters`,
          trigger: 'blur',
          ...value
        })
      } else if (!value.minChar && value.maxChar) {
        currentRules.push({
          max: value.minChar,
          message: `${value.label} should have less than ${value.maxChar} characters`,
          trigger: 'blur',
          ...value
        })
      } else if (value.minChar && value.maxChar) {
        currentRules.push({
          min: value.minChar,
          max: value.maxChar,
          message: `${value.label} should have from ${value.minChar} to ${value.maxChar} characters`,
          trigger: 'blur',
          ...value
        })
      }
    } else {
      currentRules.push(...value.rules)
    }

    // G E N E R A T E   L A B E L   /   P R O P
    acc.data[key] = {
      label: value.label,
      prop: key
    }
    return acc
  }, { rules: {}, data: {} } as {
    rules: {[key in T]: any[]},
    data: {[key in T]: {
      prop: string,
      label: string
    }}
  })

  const ref = useElFormRef()

  function resetFields () {
    ref.value.resetFields()
  }

  function validateField (props: string | Array<string>, callback?: TCallbackFn<[boolean]>) {
    ref.value.validateField(props, callback)
  }

  function clearValidate (item?: string | string[]) {
    ref.value.clearValidate(item)
  }

  async function validate () {
    return ref.value.validate().then((res) => {
      return Promise.resolve(res)
    }).catch(err => {
      ElMessage.closeAll()
      ElMessage.error('One or more required fields are invalid.')
      return Promise.reject(err)
    })
  }

  return {
    ref,

    data: mappedFormEntries.data,
    rules: reactive(mappedFormEntries.rules),

    resetFields,
    validateField,
    validate,
    clearValidate
  }
}
