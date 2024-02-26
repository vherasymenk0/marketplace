'use client'

import { Grid } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useIntl } from 'react-intl'

import { uploadListingImage } from '~/entities/attachments'

import { InformationTip } from '~/shared/components/base/InformationTip'
import { BasicCard } from '~/shared/components/cards/BasicCard'
import { UploadImageDndField } from '~/shared/components/fields/UploadImageDropzoneField'

import { CardContainer } from '../CardContainer'

export const ListingImagesFormTemplate = () => {
  const intl = useIntl()
  const session = useSession()

  return (
    <Grid container spacing={{ xs: 1, md: 3 }}>
      <Grid item xs={12} md={4} order={{ xs: 0, md: 1 }}>
        <InformationTip
          text={intl.formatMessage({
            defaultMessage:
              'Boost sales by showcasing your product visually. Upload a striking photo now!',
            id: 'editListing.images.tip',
          })}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <BasicCard>
          <CardContainer
            withDivider={false}
            title={intl.formatMessage({
              defaultMessage: 'Images',
              id: 'editListing.images.title',
            })}
          >
            <UploadImageDndField
              name="imagesAttributes"
              onUpload={(file) =>
                uploadListingImage(file.file, { authorizeToken: session.data?.apiToken })
              }
              isDnd
              multiple
            />
          </CardContainer>
        </BasicCard>
      </Grid>
    </Grid>
  )
}
