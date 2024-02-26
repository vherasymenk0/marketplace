import { Fragment, ReactNode } from 'react'

import { Text } from '~/shared/components/base/Text'

import { NextLink } from '../NextLink'

import { useStyles } from './Breadcrumbs.styles'

interface Item {
  href: string
  child: ReactNode
}
export interface BreadcrumbsProps {
  items: Item[]
  separator?: string
}

const emptyItems: Item[] = []

export const Breadcrumbs = ({ items = emptyItems, separator = '>' }: BreadcrumbsProps) => {
  const styles = useStyles()

  return (
    <Text aria-label="breadcrumb" sx={styles.root} className="a">
      {items?.map((item, index) => {
        const isLastItem = index === items.length - 1

        if (!isLastItem) {
          return (
            <Fragment key={item.href}>
              <NextLink href={item.href} color="grey.600">
                <Text variant="body4" color="grey.600">
                  {item.child}
                </Text>
              </NextLink>

              <Text variant="body4" color="grey.600" mx={1}>
                {separator}
              </Text>
            </Fragment>
          )
        }

        return (
          <Text key={item.href} variant="body4" color="grey.900">
            {item.child}
          </Text>
        )
      })}
    </Text>
  )
}
