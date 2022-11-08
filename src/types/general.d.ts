type TIndexedObject<T = any> = {
  [key: string]: T
}

type TCallbackFn<T extends unknown[] = [], R = void> = (...args: T) => R
