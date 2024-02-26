'use client'

import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ListingImportModel } from '~/entities/import'

import { Text } from '~/shared/components/base/Text'
import { BackButton } from '~/shared/components/common/BackButton'
import { getFormattedDate } from '~/shared/helpers/getFormattedDate'

import { ImportDetailsHeaderActions } from '../ImportDetailsHeaderActions'
import { ImportDetailsTabs } from '../ImportDetailsTabs'

import { useStyles } from './ImportDetailsHeader.styles'

interface Props {
  itemsCount: number
  fileName: ListingImportModel['filename']
  date: ListingImportModel['createdAt']
  failedCount: ListingImportModel['failedCount']
  importedCount: ListingImportModel['importedCount']
}

export const ImportDetailsHeader = ({
  fileName,
  date,
  itemsCount,
  importedCount,
  failedCount,
}: Props) => {
  const styles = useStyles()

  const formattedDate = getFormattedDate(date)

  return (
    <Stack>
      <BackButton sx={styles.backBtn} href="/vendor/my-imports" />

      <Stack sx={styles.wrapper}>
        <Stack>
          <Stack flexDirection="row" flexWrap="wrap">
            <Text variant="h6" color="grey.900">
              {fileName}&nbsp;-&nbsp;
            </Text>
            <Text variant="h6" color="primary.main">
              {formattedDate}
            </Text>
          </Stack>
          <Text variant="body4" color="grey.600" mt={1}>
            <FormattedMessage
              id="importDetails.items"
              defaultMessage="{count} items"
              values={{ count: itemsCount }}
            />
          </Text>
        </Stack>

        <ImportDetailsHeaderActions
          importedCount={importedCount}
          failedCount={failedCount}
          buttonsStyle={styles.actionBtn}
        />
      </Stack>

      <ImportDetailsTabs importedCount={importedCount} failedCount={failedCount} />
    </Stack>
  )
}
