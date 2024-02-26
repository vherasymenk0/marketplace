'use client'

import { Grid, Stack } from '@mui/material'
import { useIntl } from 'react-intl'

import { InformationTip } from '~/shared/components/base/InformationTip'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { PriceField } from '~/shared/components/fields/PriceField'
import { TextField } from '~/shared/components/fields/TextField'

import { CardContainer } from '../CardContainer'

export const ProductDetailsFormTemplate = () => {
  const intl = useIntl()

  return (
    <Grid container spacing={{ xs: 1, md: 3 }}>
      <Grid item xs={12} md={4} order={{ xs: 0, md: 1 }}>
        <InformationTip
          text={intl.formatMessage({
            defaultMessage:
              "Clear details instill confidence in buyers, addressing concerns and promoting trust in the product's quality.",
            id: 'editListing.attributes.tip',
          })}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <BasicCard>
          <CardContainer
            title={intl.formatMessage({
              defaultMessage: 'Product Details',
              id: 'editListing.details.title',
            })}
          >
            <Stack gap={3}>
              <TextField
                name="partName"
                label={intl.formatMessage({
                  id: 'editListing.details.partName',
                  defaultMessage: 'Part Name',
                })}
                disabled
                required
              />

              <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
                <TextField
                  name="category"
                  label={intl.formatMessage({
                    id: 'editListing.details.category',
                    defaultMessage: 'Category',
                  })}
                  required
                  disabled
                  fullWidth
                />

                <TextField
                  name="subcategory"
                  label={intl.formatMessage({
                    id: 'editListing.details.subcategory',
                    defaultMessage: 'Subcategory',
                  })}
                  required
                  disabled
                  fullWidth
                />
              </Stack>

              <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
                <TextField
                  name="originCountry"
                  label={intl.formatMessage({
                    id: 'editListing.details.originCountry',
                    defaultMessage: 'Country of Origin',
                  })}
                  required
                  disabled
                  fullWidth
                />

                <TextField
                  name="brand"
                  label={intl.formatMessage({
                    id: 'editListing.details.brand',
                    defaultMessage: 'Brand',
                  })}
                  required
                  disabled
                  fullWidth
                />
              </Stack>

              <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
                <TextField
                  name="partNumber"
                  label={intl.formatMessage({
                    id: 'editListing.details.partNumber',
                    defaultMessage: 'Part Number',
                  })}
                  required
                  disabled
                  fullWidth
                />

                <TextField
                  name="partType"
                  label={intl.formatMessage({
                    id: 'editListing.details.partType',
                    defaultMessage: 'Part Type',
                  })}
                  required
                  disabled
                  fullWidth
                />
              </Stack>

              <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
                <PriceField
                  name="price"
                  label={intl.formatMessage({
                    id: 'editListing.details.price',
                    defaultMessage: 'Price',
                  })}
                  required
                  fullWidth
                />

                <PriceField
                  name="shippingCost"
                  label={intl.formatMessage({
                    id: 'editListing.details.shippingCost',
                    defaultMessage: 'Shipping Cost',
                  })}
                  required
                  fullWidth
                />
              </Stack>

              <TextField
                name="description"
                label={intl.formatMessage({
                  id: 'editListing.details.description.label',
                  defaultMessage: 'Description',
                })}
                placeholder={intl.formatMessage({
                  id: 'editListing.details.description.placeholder',
                  defaultMessage: 'Describe your detail',
                })}
                multiline
                helperText={intl.formatMessage({
                  id: 'editListing.details.description.helperText',
                  defaultMessage: "Description can't exceed 2000 characters",
                })}
                hideError
                sx={{ height: 150 }}
              />
            </Stack>
          </CardContainer>
        </BasicCard>
      </Grid>
    </Grid>
  )
}
