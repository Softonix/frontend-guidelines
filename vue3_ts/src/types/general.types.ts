export interface IIndexedObject<T = any> {
  [key: string]: T;
}

export type INullableField<T> = T | null
