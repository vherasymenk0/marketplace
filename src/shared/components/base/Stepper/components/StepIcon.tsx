import { Box, StepIcon as MuiStepIcon } from '@mui/material'

import CheckIcon from '~/shared/assets/icons/long-check.svg'

import { SvgIcon } from '../../SvgIcon'
import { useIconStyles } from '../Stepper.styles'
import { StepVariant } from '../Stepper.types'

interface Props {
  step: number
  variant: StepVariant
}

export const StepIcon = ({ step, variant }: Props) => {
  const styles = useIconStyles({ variant })

  if (variant === 'completed') {
    return (
      <MuiStepIcon
        icon={
          <Box sx={styles.iconContainer}>
            <SvgIcon icon={CheckIcon} />
          </Box>
        }
      />
    )
  }

  return (
    <MuiStepIcon
      icon={
        <Box sx={styles.iconContainer}>
          <Box component="span">{step}</Box>
        </Box>
      }
    />
  )
}
