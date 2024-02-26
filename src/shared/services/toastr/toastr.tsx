import toast, { Toast, ToastOptions } from 'react-hot-toast'

import ErrorIcon from '~/shared/assets/icons/alert/error-icon.svg'
import WarningIcon from '~/shared/assets/icons/alert/warning-icon.svg'
import SuccessIcon from '~/shared/assets/icons/thin-check-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { palette } from '~/shared/theme/palette'

import { ToastComponent } from './components/ToastComponent'

interface ShowNotificationProps {
  message: Toast['message']
  icon: JSX.Element
  backgroundColor: string
  borderColor: string
  textColor?: string
  options?: ToastOptions
}

export const commonToastStyles = ({
  backgroundColor,
  borderColor,
}: {
  backgroundColor: string
  borderColor: string
  color?: string
}) => ({
  padding: '13px 0px 13px 6px',
  background: backgroundColor,
  border: `1px solid ${borderColor}`,
  width: '100%',
  maxWidth: '550px',
  borderRadius: '8px',
})

const showNotification = ({
  message,
  icon,
  backgroundColor,
  borderColor,
  textColor,
  options,
}: ShowNotificationProps): void => {
  toast(
    (t) => (
      <>
        <ToastComponent message={message} t={t} icon={icon} textColor={textColor} />
      </>
    ),
    {
      style: {
        ...commonToastStyles({
          backgroundColor,
          borderColor,
        }),
      },
      position: 'top-right',
      duration: 6000,
      ...options,
    },
  )
}

export const showSuccessToast = (message: Toast['message'], options?: ToastOptions): void => {
  showNotification({
    backgroundColor: palette.success.light,
    borderColor: palette.success.dark,
    textColor: palette.success.dark,
    icon: <SvgIcon icon={SuccessIcon} stroke="success.dark" />,
    message,
    ...(options && { options }),
  })
}

export const showWarningToast = (message: Toast['message'], options?: ToastOptions): void => {
  showNotification({
    backgroundColor: palette.warning.light,
    borderColor: palette.warning.main,
    icon: <SvgIcon icon={WarningIcon} />,
    message,
    ...(options && { options }),
  })
}

export const showInfoToast = (message: Toast['message'], options?: ToastOptions): void => {
  toast(message, options)
}

export const showErrorToast = (message: Toast['message'], options?: ToastOptions): void => {
  showNotification({
    backgroundColor: palette.error.medium,
    borderColor: palette.error.main,
    textColor: palette.error.main,
    icon: <SvgIcon icon={ErrorIcon} />,
    message,
    ...(options && { options }),
  })
}
