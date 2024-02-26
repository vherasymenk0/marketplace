import { TypographyOptions } from '@mui/material/styles/createTypography'

import { breakpoints } from './breakpoints'
import { redHatDisplay } from './fonts'

export const typography: TypographyOptions = {
  fontFamily: redHatDisplay.style.fontFamily,
  h1: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 72,
      lineHeight: '85px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 46,
      lineHeight: '54px',
    },
  },
  h2: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 56,
      lineHeight: '70px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 40,
      lineHeight: '48px',
    },
  },
  h3: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 48,
      lineHeight: '60px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 32,
      lineHeight: '40px',
    },
  },
  h4: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 40,
      lineHeight: '52px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 28,
      lineHeight: '34px',
    },
  },
  h5: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 32,
      lineHeight: '40px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 24,
      lineHeight: '28px',
    },
  },
  h6: {
    fontWeight: 700,
    lineHeight: '28px',

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 24,
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 22,
    },
  },

  subtitle1: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 22,
      lineHeight: '28px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 20,
      lineHeight: '24px',
    },
  },
  subtitle2: {
    fontWeight: 700,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 20,
      lineHeight: '24px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 18,
      lineHeight: '20px',
    },
  },
  subtitle3: {
    fontWeight: 600,
    lineHeight: '22px',

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 18,
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 16,
    },
  },
  subtitle4: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
  },

  body1: {
    fontWeight: 400,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 24,
      lineHeight: '30px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 22,
      lineHeight: '28px',
    },
  },
  body2: {
    fontWeight: 400,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 20,
      lineHeight: '28px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 18,
      lineHeight: '24px',
    },
  },
  body3: {
    fontWeight: 400,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: 18,
      lineHeight: '26px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: 16,
      lineHeight: '22px',
    },
  },
  body4: {
    fontWeight: 400,
    fontSize: 16,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      lineHeight: '24px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      lineHeight: '22px',
    },
  },
  body5: {
    fontWeight: 400,
    fontSize: 14,

    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      lineHeight: '22px',
    },

    [`@media (max-width: ${breakpoints.values.md}px)`]: {
      lineHeight: '20px',
    },
  },
  body6: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
  },

  button1: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '22px',
  },
  button2: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '22px',
  },
  button3: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '22px',
  },
  button4: {
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '16px',
  },
}
