'use client'

import { Box, Container, Grid, Stack, Theme, useMediaQuery } from '@mui/material'
import { ReactNode } from 'react'

import { Logo } from '~/shared/components/common/Logo'

import { useStyles } from './AuthLayout.styles'

interface AuthProps {
  startAdornment?: ReactNode
  children: JSX.Element
}

export const AuthLayout = ({ startAdornment, children }: AuthProps) => {
  const styles = useStyles()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const logoVariant = isMobile ? 'dark' : 'light'

  return (
    <>
      <Container sx={styles.headerContainer}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={styles.header}
        >
          <Logo variant={logoVariant} />
        </Stack>
      </Container>

      <Container component="main" sx={styles.pageContainer}>
        <Grid container sx={styles.leftSectionContainer}>
          <Grid item xs={12} md={4} sx={styles.leftSection}>
            <Box sx={styles.leftSectionContent}>{startAdornment}</Box>
          </Grid>

          <Grid item xs={12} md={8} sx={styles.contentSectionWrapper}>
            <Box sx={styles.contentSection}>{children}</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
