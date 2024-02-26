import { createTheme } from '@mui/material/styles'

import { breakpoints } from './breakpoints'
import { components } from './components'
import { palette } from './palette'
import { shape } from './shape'
import { typography } from './typography'

export const theme = createTheme({
  spacing: 8,
  breakpoints,
  shape,
  palette,
  components,
  typography,
})
