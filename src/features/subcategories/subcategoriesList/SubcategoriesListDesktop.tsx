import { Box, Grid } from '@mui/material'

import { SubcategoryModel } from '~/entities/category'

import BigLogo from '~/shared/assets/logos/big-logo.svg'
import { NextLink } from '~/shared/components/base/NextLink'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { Text } from '~/shared/components/base/Text'

interface Props {
  subcategories: SubcategoryModel[]
}

export const SubcategoriesListDesktop = ({ subcategories }: Props) => {
  const haveTwoItems = subcategories.length <= 2

  return (
    <Box
      sx={({ palette }) => ({
        position: 'relative',
        width: haveTwoItems ? 600 : 1224,
        minHeight: 313,
        border: '1px solid',
        borderColor: palette.grey[200],
        borderRadius: 1,
        px: 13,
        pt: 6,
        pb: 22,
      })}
    >
      <SvgIcon
        icon={BigLogo}
        size={{ height: 197, width: 288 }}
        sx={{ position: 'absolute', right: 0, bottom: 0 }}
      />

      <Grid container rowSpacing={2}>
        {subcategories.map((item) => (
          <Grid item xs={haveTwoItems ? 6 : 4} key={item.name}>
            <NextLink href={item.slug} sx={{ display: 'block', maxWidth: 255 }}>
              <Text variant="subtitle4" color="grey.900" lineClamp={1}>
                {item.name}
              </Text>
            </NextLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
