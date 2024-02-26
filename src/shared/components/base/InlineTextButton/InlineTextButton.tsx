import { Button, ButtonProps } from '../Button'

import { useStyles } from './InlineTextButton.styles'

interface Props
  extends Pick<
    ButtonProps,
    'color' | 'disabled' | 'startIcon' | 'endIcon' | 'sx' | 'onClick' | 'href'
  > {
  children: React.ReactNode
}

export const InlineTextButton = ({ children, color = 'secondary', sx, ...rest }: Props) => {
  const styles = useStyles()

  return (
    <Button variant="text" color={color} sx={{ ...styles.root, ...sx }} fullWidth={false} {...rest}>
      {children}
    </Button>
  )
}
