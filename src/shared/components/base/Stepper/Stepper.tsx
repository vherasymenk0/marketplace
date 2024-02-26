import { Stepper as MuiStepper, StepperProps } from '@mui/material'

import { Step } from './components/Step'
import { StepperItem, StepperVariant } from './Stepper.types'

interface Props extends Omit<StepperProps, 'variant'> {
  steps: StepperItem[]
  variant?: StepperVariant
}

export const Stepper = ({
  activeStep = 1,
  orientation = 'horizontal',
  steps,
  variant = 'full',
  ...props
}: Props) => {
  return (
    <MuiStepper activeStep={activeStep} orientation={orientation} {...props}>
      {steps.map((step, idx) => {
        const currentStep = idx + 1
        const isActive = currentStep === activeStep
        const isCompleted = currentStep < activeStep

        return (
          <Step
            active={isActive}
            subLabel={step.subLabel}
            completed={isCompleted}
            step={currentStep}
            key={step.label}
            stepperVariant={variant}
          >
            {step.label}
          </Step>
        )
      })}
    </MuiStepper>
  )
}
