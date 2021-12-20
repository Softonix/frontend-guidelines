export type TIndexedObject<T = any> = {
  [key: string]: T;
}

export type TNullableField<T> = T | null

export type TCallbackFn<T extends unknown[] = [], R = void> = (...args: T) => R

export enum EComponentSize {
  MINI = 'mini',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum EComponentType {
  INFO = 'info',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger'
}
