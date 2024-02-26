import LogoPattern from '~/shared/assets/images/logo-pattern.png'
import { makeSxStyles } from '~/shared/helpers/makeSxStyles'

export const useStyles = makeSxStyles(({ palette, breakpoints }) => ({
  headerContainer: {
    [breakpoints.up('md')]: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2,
    },
  },
  header: {
    pt: { xs: 2.5, md: 6 },
    pb: 2,
  },
  pageContainer: {
    display: 'flex',

    [breakpoints.down('md')]: {
      padding: '0 16px 32px 16px',
      flexDirection: 'column',
    },

    [breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  leftSectionContainer: {
    height: '100%',
  },
  leftSection: {
    [breakpoints.up('md')]: {
      zIndex: 1,
      height: '100%',
    },
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
  leftSectionContent: {
    [breakpoints.up('md')]: {
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      zIndex: -1,

      ':after': {
        content: '""',
        height: '100%',
        width: '50vw',
        position: 'absolute',
        right: 0,
        backgroundColor: 'transparent',
        backgroundImage: `url('${LogoPattern.src}')`,
        backgroundRepeat: 'repeat',
        zIndex: -1,
        opacity: 0.1,
      },

      ':before': {
        content: '""',
        height: '100%',
        width: '50vw',
        position: 'absolute',
        right: 0,
        backgroundColor: palette.primary.dark,
        zIndex: -1,
      },
    },
  },
  contentSectionWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    py: 3,

    [breakpoints.up('md')]: {
      px: 6.5,
    },
  },
  contentSection: {
    width: '100%',
    maxWidth: 496,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    form: {
      width: '100%',
    },
  },
}))
