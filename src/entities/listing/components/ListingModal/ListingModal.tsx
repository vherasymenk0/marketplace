'use client'

import { Stack } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import { FormattedMessage } from 'react-intl'

import CloseIcon from '~/shared/assets/icons/close.svg'
import ErrorIcon from '~/shared/assets/icons/triangle-warning.svg'
import { ActionIcon } from '~/shared/components/base/ActionIcon'
import { Button } from '~/shared/components/base/Button'
import { InlineTextButton } from '~/shared/components/base/InlineTextButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'
import { IconShape } from '~/shared/components/common/IconShape'

import { useStyles } from './ListingModal.styles'

interface Props {
  modalTitle: React.ReactNode
  modalContent: React.ReactNode
  submitBtnText: React.ReactNode
  cancelBtnText?: React.ReactNode
  icon?: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

export const ListingModal = ({
  isOpen,
  modalTitle,
  modalContent,
  submitBtnText,
  cancelBtnText,
  icon,
  onClose,
  onSubmit,
}: Props) => {
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
        {icon ?? (
          <IconShape variant="warning">
            <SvgIcon size={32} icon={ErrorIcon} stroke="warning.main" />
          </IconShape>
        )}
        <Text variant="subtitle1" sx={styles.title}>
          {modalTitle}
        </Text>
        <Text variant="body3" sx={styles.text}>
          {modalContent}
        </Text>
        <Stack direction="row" sx={styles.buttons}>
          <InlineTextButton color="secondary" onClick={onClose}>
            {cancelBtnText ?? (
              <FormattedMessage id="approveLisitng.btn.cancel" defaultMessage="Cancel" />
            )}
          </InlineTextButton>
          <Button onClick={onSubmit} size="medium" className="modal-submit-btn">
            {submitBtnText}
          </Button>
        </Stack>
      </Dialog>
    </>
  )
}
