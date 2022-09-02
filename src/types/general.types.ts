export type TIndexedObject<T = any> = {
  [key: string]: T
}

export type TCallbackFn<T extends unknown[] = [], R = void> = (...args: T) => R

export enum EComponentSize {
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large'
}

export enum EComponentType {
  INFO = 'info',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger'
}
