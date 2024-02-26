import { Tab, Tabs } from '@mui/material'
import { usePathname } from 'next/navigation'
import { SyntheticEvent } from 'react'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'
import { useRouter } from '~/shared/hooks/useRouter'

interface Props {
  importedCount: number
  failedCount: number
}

const getTabsList = (importedCount: number, failedCount: number) => [
  {
    label: {
      id: 'vendor.importDetails.importedTab',
      defaultMessage: 'Imported ({count})',
      values: {
        count: importedCount,
      },
    },
    value: 'imported-listings',
  },
  {
    label: {
      defaultMessage: 'Failed ({count})',
      id: 'vendor.importDetails.failedTab',
      values: {
        count: failedCount,
      },
    },
    value: 'failed-listings',
  },
]

export const ImportDetailsTabs = ({ importedCount, failedCount }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const tabList = getTabsList(importedCount, failedCount)

  const pathSegments = pathname.split('/')
  const lastSegment = pathSegments[pathSegments.length - 1] ?? ''

  const handleChange = (_: SyntheticEvent, value: string) => {
    pathSegments.pop()
    pathSegments.push(value)
    const newPath = pathSegments.join('/')
    router.push(newPath)
  }

  return (
    <Tabs value={lastSegment} onChange={handleChange} variant="scrollable" scrollButtons={false}>
      {tabList.map(({ label, value }) => (
        <Tab
          key={value}
          label={
            <Text variant="subtitle4">
              <FormattedMessage {...label} />
            </Text>
          }
          value={value}
        />
      ))}
    </Tabs>
  )
}
