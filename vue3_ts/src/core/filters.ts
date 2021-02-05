import { computed, Ref } from 'vue'

export const filterDate = (ref: Ref<Date | string>, format?: string) => computed(() => ref.value)
