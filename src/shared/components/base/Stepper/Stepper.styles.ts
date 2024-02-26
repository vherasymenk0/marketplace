import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

import { StepVariant, StepperVariant } from './Stepper.types'

interface Props {
  isDisabled: boolean
  variant: StepperVariant
}

export const useStepStyles = makeSxStyles(
  ({ palette, typography }, { isDisabled, variant }: Props) => ({
    label: {
      ...(variant === 'slim' && {
        '.MuiStepLabel-iconContainer': {
          padding: 0,
        },
      }),

      '.MuiStepLabel-labelContainer > span': {
        ...typography.button1,

        ':first-of-type': {
          color: palette.grey[400],

          ...(isDisabled && {
            color: palette.grey[300],
          }),
        },

        ':last-of-type': {
          color: palette.secondary.main,

          ...(isDisabled && {
            color: palette.grey[300],
          }),
        },
      },
    },
  }),
)

interface IconProps {
  variant: StepVariant
}

export const useIconStyles = makeSxStyles(({ palette }, { variant }: IconProps) => ({
  iconContainer: {
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.common.white,
    border: `2px solid ${palette.secondary.main}`,
    borderRadius: '50%',
    color: palette.secondary.main,

    ...(variant === 'completed' && {
      backgroundColor: palette.secondary.main,

      path: {
        fill: palette.common.white,
      },
    }),

    ...(variant === 'disabled' && {
      color: palette.grey[300],
      borderColor: palette.grey[300],
    }),

    '& > :last-child': {
      fontSize: 20,
      fontWeight: 700,
    },
  },
}))
