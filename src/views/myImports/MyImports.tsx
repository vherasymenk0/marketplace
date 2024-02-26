'use client'

import { Container, Stack } from '@mui/material'

import { ListingImportModel } from '~/entities/import'

import { QueryPagination } from '~/shared/components/base/QueryPagination'

import { ImportsEmptyState } from './components/ImportsEmptyState'
import { ImportsHeader } from './components/ImportsHeader'
import { ImportsTable } from './components/ImportsTable'
import { useStyles } from './MyImports.styles'

interface Props {
  listingImports: ListingImportModel[]
  itemsCount: number
  pagesCount: number
}

export const MyImports = ({ listingImports, itemsCount, pagesCount }: Props) => {
  const isEmpty = itemsCount === 0
  const styles = useStyles()

  return (
    <Container sx={styles.root}>
      <ImportsHeader itemsCount={itemsCount} />

      <Stack sx={styles.main}>
        {isEmpty ? (
          <ImportsEmptyState />
        ) : (
          <>
            <ImportsTable tableData={listingImports} />
            <QueryPagination sx={{ mt: 6 }} count={pagesCount} />
          </>
        )}
      </Stack>
    </Container>
  )
}
