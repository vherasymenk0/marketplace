'use client'

import { Grid, GridProps } from '@mui/material'
import type { ResponsiveStyleValue } from '@mui/system'
import { ReactNode } from 'react'

import { typedMemo } from '~/shared/types/typedMemo'

import { defaultKeyExtractor, getColumns } from './GridList.utils'

export interface GridListProps<TOption extends { id?: string | number }> {
  items: TOption[]
  spacing?: GridProps['spacing']
  columns?: ResponsiveStyleValue<number>
  renderItem: (item: TOption, index: number) => ReactNode
  renderGridItem?: (
    args: {
      children: ReactNode
      key: string | number
      props: Record<string, unknown>
    },
    index: number,
  ) => ReactNode
  keyExtractor?: (item: TOption) => string | number
}

export const GridList = typedMemo(
  <TOption extends { id?: string | number }>({
    items,
    spacing = 0,
    columns = 1,
    keyExtractor = defaultKeyExtractor,
    renderGridItem,
    renderItem,
  }: GridListProps<TOption>) => {
    const gridColumns = getColumns(columns)

    return (
      <Grid container spacing={spacing} sx={{ overflow: 'hidden' }}>
        {items?.map((item, index) => {
          if (renderGridItem) {
            return renderGridItem(
              {
                children: renderItem(item, index),
                key: keyExtractor(item),
                props: { item: true, ...gridColumns },
              },
              index,
            )
          }

          return (
            <Grid item {...gridColumns} key={keyExtractor(item)}>
              {renderItem(item, index)}
            </Grid>
          )
        })}
      </Grid>
    )
  },
)
