import { Stack } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { CURRENCY_FORMAT_OPTIONS } from '~/features/currency'

import { ImportedDetailsModel } from '~/entities/import'

import CloseIcon from '~/shared/assets/icons/close.svg'
import { ActionIcon } from '~/shared/components/base/ActionIcon'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

import { useStyles } from './ImportedDetailsModal.styles'

interface Props {
  isOpen: boolean
  onClose: () => void
  data: ImportedDetailsModel
}

export const ImportedDetailsModal = ({ isOpen, onClose, data }: Props) => {
  const {
    partNumber,
    partType,
    brand,
    description,
    id,
    price,
    shippingCost,
    title,
    originCountry,
  } = data
  const styles = useStyles()

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        PaperProps={{ sx: styles.paper }}
      >
        <ActionIcon onClick={onClose} sx={styles.closeIcon}>
          <SvgIcon size={32} icon={CloseIcon} />
        </ActionIcon>
        <Stack gap={2}>
          <NextLink href={`/vendor/edit-listing/${id}`}>
            <Text variant="subtitle2" color="primary.main">
              {title}
            </Text>
          </NextLink>

          <Stack>
            <Text variant="body4" sx={styles.label}>
              <FormattedMessage
                id="importedDetails.tableCell.description"
                defaultMessage="Description"
              />
            </Text>
            <Text variant="body4" sx={styles.text}>
              {description}
            </Text>
          </Stack>

          <Stack flexDirection="row" gap={2} justifyContent="space-between">
            <Stack gap={2}>
              <Stack>
                <Text variant="body4" sx={styles.label}>
                  <FormattedMessage
                    id="importedDetails.tableCell.partNumber"
                    defaultMessage="Part Number"
                  />
                </Text>
                <Text variant="body4" sx={styles.text}>
                  {partNumber}
                </Text>
              </Stack>

              <Stack>
                <Text variant="body4" sx={styles.label}>
                  <FormattedMessage id="importedDetails.tableCell.brand" defaultMessage="Brand" />
                </Text>
                <Text variant="body4" sx={styles.text}>
                  {brand}
                </Text>
              </Stack>

              <Stack>
                <Text variant="body4" sx={styles.label}>
                  <FormattedMessage id="importedDetails.tableCell.price" defaultMessage="Price" />
                </Text>
                <Text variant="body4" sx={styles.text}>
                  <FormattedNumber value={price} {...CURRENCY_FORMAT_OPTIONS} />
                </Text>
              </Stack>
            </Stack>

            <Stack gap={2}>
              <Stack>
                <Text variant="body4" sx={styles.label}>
                  <FormattedMessage
                    id="importedDetails.tableCell.country"
                    defaultMessage="Country"
                  />
                </Text>
                <Text variant="body4" sx={styles.text}>
                  {originCountry}
                </Text>
              </Stack>

              <Stack>
                <Text variant="body4" sx={styles.label}>
                  <FormattedMessage
                    id="importedDetails.tableCell.partType"
                    defaultMessage="Part Type"
                  />
                </Text>
                <Text variant="body4" sx={styles.text}>
                  {partType}
                </Text>
              </Stack>

              <Stack>
                <Text variant="body4" sx={styles.label}>
                  <FormattedMessage
                    id="importedDetails.tableCell.shippingCost"
                    defaultMessage="Shipping Cost"
                  />
                </Text>
                <Text variant="body4" sx={styles.text}>
                  <FormattedNumber value={shippingCost} {...CURRENCY_FORMAT_OPTIONS} />
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Dialog>
    </>
  )
}
