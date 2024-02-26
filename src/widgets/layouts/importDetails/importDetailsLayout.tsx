import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

import { ListingImportModel } from '~/entities/import'

import { ImportDetailsHeader } from './components/ImportDetailsHeader'

interface Props extends PropsWithChildren {
  itemsCount: number
  fileName: ListingImportModel['filename']
  date: ListingImportModel['createdAt']
  failedCount: ListingImportModel['failedCount']
  importedCount: ListingImportModel['importedCount']
}

export const ImportDetailsLayout = ({ children, ...props }: Props) => {
  return (
    <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 12, md: 14 } }}>
      <ImportDetailsHeader {...props} />
      {children}
    </Container>
  )
}
