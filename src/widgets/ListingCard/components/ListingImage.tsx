import Image from 'next/image'

import { CardImageContainer } from '~/shared/components/common/CardImageContainer'
import { EmptyImage } from '~/shared/components/common/EmptyImage'

interface Props {
  src?: string
}

export const ListingImage = ({ src }: Props) => {
  const isEmptyImage = !src

  return (
    <CardImageContainer
      width={{ xs: '100%', md: 264 }}
      minWidth={{ xs: '100%', md: 264 }}
      height={264}
    >
      {isEmptyImage ? (
        <EmptyImage logoSize={{ height: 38, width: 170 }} />
      ) : (
        <Image
          src={src}
          alt="listing image"
          style={{
            objectFit: 'cover',
          }}
          sizes="600px"
          fill
        />
      )}
    </CardImageContainer>
  )
}
