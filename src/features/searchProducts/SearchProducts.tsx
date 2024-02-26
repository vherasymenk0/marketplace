import { SearchInput, SearchInputProps } from '~/shared/components/inputs/SearchInput'

import { useStyles } from './SearchProducts.styles'

export const SearchProducts = ({ ...rest }: Omit<SearchInputProps, 'onChange'>) => {
  const styles = useStyles()

  return <SearchInput sx={styles.search} delay={100} {...rest} />
}
