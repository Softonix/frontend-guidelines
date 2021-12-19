export type TIndexedObject<T = any> = {
  [key: string]: T;
}

export type TNullableField<T> = T | null

export type TCallbackFn<T extends unknown[] = [], R = void> = (...args: T) => R
