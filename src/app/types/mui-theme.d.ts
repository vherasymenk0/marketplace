import type {} from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {}

declare module '@mui/material' {
  interface Color {
    25?: string
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    medium?: string
  }

  interface SimplePaletteColorOptions {
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    medium?: string
  }

  interface Palette {
    common: {
      black: string
      white: string
    }
    success: {
      main: string
      dark: string
      light: string
    }
    warning: {
      main: string
      dark: string
      light: string
    }
    error: {
      main: string
      dark: string
      light: string
    }
    info: {
      main: string
      dark: string
      light: string
    }
  }

  interface PaletteOptions {
    common: {
      black: string
      white: string
    }
    success: {
      main: string
      dark: string
      light: string
    }
    warning: {
      main: string
      dark: string
      light: string
    }
    error: {
      main: string
      dark: string
      light: string
    }
    info: {
      main: string
      dark: string
      light: string
    }
  }

  interface TypographyVariants {
    subtitle3: React.CSSProperties
    subtitle4: React.CSSProperties
    subtitle4: React.CSSProperties
    body3: React.CSSProperties
    body4: React.CSSProperties
    body5: React.CSSProperties
    body6: React.CSSProperties
    button1: React.CSSProperties
    button2: React.CSSProperties
    button3: React.CSSProperties
    button4: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties
    subtitle4?: React.CSSProperties
    subtitle4?: React.CSSProperties
    body3?: React.CSSProperties
    body4?: React.CSSProperties
    body5?: React.CSSProperties
    body6?: React.CSSProperties
    button1?: React.CSSProperties
    button2?: React.CSSProperties
    button3?: React.CSSProperties
    button4?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true
    subtitle4: true
    subtitle4: true
    body3: true
    body4: true
    body5: true
    body6: true
    button1: true
    button2: true
    button3: true
    button4: true
  }
}
