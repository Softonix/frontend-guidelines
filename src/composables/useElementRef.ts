import { ComponentPublicInstance, ref } from 'vue'
import { TNullableField } from '@/types'

export function useElementRef () {
  return ref<TNullableField<HTMLElement>>(null)
}

export function useComponentRef<T> () {
  return ref<TNullableField<ComponentPublicInstance & T>>(null)
}
