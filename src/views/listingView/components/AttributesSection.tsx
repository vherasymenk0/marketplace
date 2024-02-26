import { Divider, Grid, Stack } from '@mui/material'
import { FormattedMessage } from 'react-intl'

import { ListingModel } from '~/entities/listing'

import { Text } from '~/shared/components/base/Text'
import { capitalize } from '~/shared/helpers/capitalize'

interface Props {
  attributes: ListingModel['partAttributes']
}

export const AttributesSection = ({ attributes }: Props) => {
  if (!attributes) return null

  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <Text variant="h6" color="grey.900">
        <FormattedMessage defaultMessage="Attributes" id="listingPage.attributes.title" />
      </Text>

      <Grid container columnSpacing={3} rowSpacing={{ xs: 1.5, md: 2 }}>
        {attributes.map(({ name, value }) => (
          <Grid item xs={12} md={6} key={name}>
            <Stack direction="row" justifyContent="space-between">
              <Text variant="body4" color="grey.600">
                {capitalize(name)}
              </Text>

              <Text variant="body4" color="grey.800">
                {value}
              </Text>
            </Stack>

            <Divider sx={{ mt: { xs: 1.5, md: 2 } }} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
