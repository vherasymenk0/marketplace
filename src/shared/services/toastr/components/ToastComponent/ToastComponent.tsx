import { IconButton, IconButtonProps, Stack, StackProps } from '@mui/material'
import toast, { Toast } from 'react-hot-toast'

import CloseSVG from '~/shared/assets/icons/alert/close-icon.svg'
import { Text } from '~/shared/components/base/Text'

interface ToastComponentProps {
  message: Toast['message']
  t?: Toast
  icon: JSX.Element
  containerSx?: StackProps['sx']
  iconSx?: StackProps['sx']
  buttonSx?: IconButtonProps['sx']
  textColor?: string
}

export const ToastComponent = ({
  message,
  t,
  icon,
  containerSx,
  iconSx,
  buttonSx,
  textColor = 'secondary.primary',
}: ToastComponentProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        ...containerSx,
      }}
    >
      {icon ? <Stack sx={{ mr: 1.5, ...iconSx }}>{icon}</Stack> : null}

      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Text variant="body4" color={textColor}>
          <>{message}</>
        </Text>

        <IconButton
          sx={{
            p: 0,
            ...buttonSx,
          }}
          onClick={() => toast.dismiss(t?.id)}
        >
          <CloseSVG />
        </IconButton>
      </Stack>
    </Stack>
  )
}
