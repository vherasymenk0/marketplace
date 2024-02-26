import { PaletteType, palette } from '~/shared/theme/palette'

type ColorValues = Record<string, string>

export const getPaletteColor = (color: string) => {
  const [colorKey, shadeKey] = color.split('.') as [keyof PaletteType, keyof ColorValues]

  if (!colorKey || !shadeKey) return color

  const colorShades = palette[colorKey] as ColorValues
  return colorShades[shadeKey]
}
