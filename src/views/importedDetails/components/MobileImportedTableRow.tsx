import { Stack, TableCell, TableRow } from '@mui/material'
import { FormattedNumber } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { ImportedDetailsModel } from '~/entities/import'

import { Text } from '~/shared/components/base/Text'
import { useBoolean } from '~/shared/hooks/useBoolean'

import { ImportedDetailsModal } from './ImportedDetailsModal'

interface Props {
  data: ImportedDetailsModel
}

export const MobileImportedTableRow = ({ data }: Props) => {
  const { title, price } = data
  const [isOpen, { off, on }] = useBoolean(false)

  return (
    <>
      <TableRow onClick={on}>
        <TableCell>
          <Stack justifyContent="space-between" gap={1}>
            <Text lineClamp={2} className="importDetailsFileCell">
              {title}
            </Text>
            <Text lineClamp={2} className="importDetailsFileCell" color="primary.main">
              <FormattedNumber value={price} {...CURRENCY_FORMAT_OPTIONS} />
            </Text>
          </Stack>
        </TableCell>
      </TableRow>

      {isOpen ? <ImportedDetailsModal isOpen={isOpen} onClose={off} data={data} /> : null}
    </>
  )
}
