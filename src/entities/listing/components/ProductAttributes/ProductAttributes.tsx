'use client'

import { Grid } from '@mui/material'
import { useIntl } from 'react-intl'

import { InformationTip } from '~/shared/components/base/InformationTip'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { TextInput } from '~/shared/components/inputs/TextInput'
import { capitalize } from '~/shared/helpers/capitalize'

import { ListingModel } from '../../model/listing'
import { CardContainer } from '../CardContainer'

interface Props {
  attributes: ListingModel['partAttributes']
}

export const ProductAttributes = ({ attributes }: Props) => {
  const intl = useIntl()
  const attributesCount = attributes?.length

  return (
    <Grid container spacing={{ xs: 1, md: 3 }}>
      <Grid item xs={12} md={4} order={{ xs: 0, md: 1 }}>
        <InformationTip
          text={intl.formatMessage({
            defaultMessage:
              'Clear attributes help customers match parts with their specific vehicle models, enhancing the likelihood of a successful purchase.',
            id: 'editListing.attributes.tip',
          })}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <BasicCard>
          <CardContainer
            title={intl.formatMessage(
              {
                defaultMessage: 'Product Attributes ({count})',
                id: 'editListing.attributes.title',
              },
              { count: attributesCount },
            )}
          >
            <Grid container spacing={3}>
              {attributes?.map(({ name, value }) => {
                return (
                  <Grid key={name} item xs={12} md={6}>
                    <TextInput label={capitalize(name)} value={value} disabled fullWidth />
                  </Grid>
                )
              })}
            </Grid>
          </CardContainer>
        </BasicCard>
      </Grid>
    </Grid>
  )
}
