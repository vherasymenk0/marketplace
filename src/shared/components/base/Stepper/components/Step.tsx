import { Box, Step as MuiStep, StepLabel as MuiStepLabel, StepProps } from '@mui/material'

import { useStepStyles } from '../Stepper.styles'
import { StepperVariant } from '../Stepper.types'

import { StepIcon } from './StepIcon'

interface Props extends StepProps {
  step: number
  subLabel?: string
  stepperVariant: StepperVariant
}

export const Step = ({
  subLabel,
  step,
  active,
  completed,
  stepperVariant,
  children,
  ...rest
}: Props) => {
  const isDisabled = !completed && !active
  const styles = useStepStyles({ isDisabled, variant: stepperVariant })

  const getStateVariant = () => {
    if (active) return 'active'
    if (completed) return 'completed'
    return 'disabled'
  }

  if (stepperVariant === 'slim')
    return (
      <MuiStep active={active} completed={completed} {...rest}>
        <MuiStepLabel
          icon={<StepIcon step={step} variant={getStateVariant()} />}
          sx={styles.label}
        />
      </MuiStep>
    )

  return (
    <MuiStep active={active} completed={completed} {...rest}>
      <MuiStepLabel
        icon={<StepIcon step={step} variant={getStateVariant()} />}
        optional={<Box component="span">{subLabel}</Box>}
        sx={styles.label}
      >
        {children}
      </MuiStepLabel>
    </MuiStep>
  )
}
