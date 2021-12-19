/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Storage {
    hasKey(key: string): boolean;
    setItem(key: string, value: any): void;
  }
}


