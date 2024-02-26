import { ComponentProps, ComponentType, memo } from 'react'

type PropsComparator<TComponent extends ComponentType> = (
  prevProps: Readonly<ComponentProps<TComponent>>,
  nextProps: Readonly<ComponentProps<TComponent>>,
) => boolean

export const typedMemo: <TComponent extends ComponentType<any>>(
  Component: TComponent,
  propsComparator?: PropsComparator<TComponent>,
) => TComponent = memo
