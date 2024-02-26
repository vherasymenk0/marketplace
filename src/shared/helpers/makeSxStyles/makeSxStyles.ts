import { SxProps, Theme, useTheme } from '@mui/material'

type StyleFunction<TProps, TStyles extends Record<string, SxProps<Theme>>> = [TProps] extends [
  never,
]
  ? (theme: Theme, props?: TProps) => TStyles
  : (theme: Theme, props: TProps) => TStyles

export const makeSxStyles = <
  TProps = never,
  TStyles extends Record<string, SxProps<Theme>> = Record<string, SxProps<Theme>>,
>(
  styles: StyleFunction<TProps, TStyles>,
) => {
  return (props?: TProps): TStyles => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme<Theme>()
    return styles(theme, props as TProps)
  }
}
