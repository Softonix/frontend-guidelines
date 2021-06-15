import { ref } from 'vue'
import { TNullableField } from '@/types'
import { Vue } from 'vue-class-component'

export function useElementRef () {
  return ref<TNullableField<HTMLElement>>(null)
}

export function useComponentRef<T> () {
  return ref<TNullableField<Vue & T>>(null)
}
