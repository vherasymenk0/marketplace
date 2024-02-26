import { Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { NextLink } from '~/shared/components/base/NextLink'
import { Text } from '~/shared/components/base/Text'

export const ReviewSection = () => {
  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage defaultMessage="Leave Review" id="listingPage.review.title" />
      </Text>

      <Text variant="body4" color="grey.800">
        <FormattedMessage
          defaultMessage={
            "Review this product after purchase. If you've received it, click {link} to leave a review."
          }
          id="listingPage.review.description"
          values={{
            link: (
              <NextLink href="#" color="primary.main">
                <FormattedMessage
                  defaultMessage="Go to my delivered orders"
                  id="listingPage.review.link"
                />
              </NextLink>
            ),
          }}
        />
      </Text>
    </Stack>
  )
}
