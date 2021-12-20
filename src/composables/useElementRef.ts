import { ComponentPublicInstance, ref } from 'vue'
import { TNullableField } from '@/types'

// creates html element ref
export function useElementRef () {
  return ref<TNullableField<HTMLElement>>(null)
}

// creates vue component ref with vue instance and generic types
export function useComponentRef<T> () {
  return ref<TNullableField<ComponentPublicInstance & T>>(null)
}
