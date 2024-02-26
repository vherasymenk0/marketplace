'use client'

import { Box, Stack, Theme, useMediaQuery } from '@mui/material'
import { ReactNode, useCallback } from 'react'
import { FormattedMessage } from 'react-intl'

import { Text } from '~/shared/components/base/Text'

export const SignUpBuyerDescription = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const renderParagraph = useCallback(
    (chunks: ReactNode[]) => (
      <Box component="p" mt={2}>
        {chunks}
      </Box>
    ),
    [],
  )

  if (isMobile) return null

  return (
    <Stack maxWidth={288}>
      <Stack>
        <Text variant="h5" mb={3} color="grey.50">
          <FormattedMessage
            id="buyer.signup.title"
            defaultMessage="Unlock the World of Auto Parts"
          />
        </Text>
        <Text variant="body4" color="grey.200">
          <FormattedMessage
            id="buyer.signup.description"
            defaultMessage="Gain in-depth insights into auto parts, so you can make informed purchases. <p>Effortlessly locate parts that fit your car. We simplify your search by categorizing auto parts based on your vehicle's make, model, and more.
             </p> <p>Shop with confidence. We collaborate only with reputable vendors, ensuring that you receive high-quality, genuine, or aftermarket auto parts.</p>"
            values={{
              p: renderParagraph,
            }}
          />
        </Text>
      </Stack>
    </Stack>
  )
}
