import type { VNodeProps } from '@vue/runtime-core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PickProps<T extends abstract new (...args: any) => any> = Omit<
  InstanceType<T>['$props'],
  keyof VNodeProps
>
