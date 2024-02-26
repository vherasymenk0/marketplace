import { Grid } from '@mui/material'
import { useIntl } from 'react-intl'

import { capitalize } from '~/shared/helpers/capitalize'

import { ListingAttribute } from './ListingAttribute'

interface Props {
  description: string | null
  originCountry: string
  brand: string
  partNumber: string
  partType: string
}

export const AdditionalInfo = ({
  description,
  brand,
  originCountry,
  partNumber,
  partType,
}: Props) => {
  const intl = useIntl()

  return (
    <Grid container rowSpacing={{ xs: 3, md: 2 }} columnSpacing={3} justifyContent="space-between">
      <Grid item xs={12}>
        <ListingAttribute
          label={intl.formatMessage({
            defaultMessage: 'Description',
            id: 'listingCard.attributeInfo.description',
          })}
          value={description}
        />
      </Grid>

      <Grid item xs={6} md="auto">
        <ListingAttribute
          label={intl.formatMessage({
            defaultMessage: 'Country of origin',
            id: 'listingCard.attributeInfo.countryOfOrigin',
          })}
          value={originCountry}
        />
      </Grid>

      <Grid item xs={6} md="auto">
        <ListingAttribute
          label={intl.formatMessage({
            defaultMessage: 'Brand',
            id: 'listingCard.attributeInfo.brand',
          })}
          value={brand}
        />
      </Grid>

      <Grid item xs={6} md="auto">
        <ListingAttribute
          label={intl.formatMessage({
            defaultMessage: 'Part number',
            id: 'listingCard.attributeInfo.partNumber',
          })}
          value={partNumber}
        />
      </Grid>

      <Grid item xs={6} md="auto">
        <ListingAttribute
          label={intl.formatMessage({
            defaultMessage: 'Part type',
            id: 'listingCard.attributeInfo.partType',
          })}
          value={capitalize(partType)}
        />
      </Grid>
    </Grid>
  )
}
