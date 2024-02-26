import { SubcategoryModel } from '~/entities/category'

import { CSSHide } from '~/shared/components/base/CSSHide'

import { SubcategoriesListDesktop } from './SubcategoriesListDesktop'
import { SubcategoriesListMobile } from './SubcategoriesListMobile'

interface Props {
  subcategories: SubcategoryModel[]
}

export const SubcategoriesList = ({ subcategories }: Props) => {
  return (
    <>
      <CSSHide screen="desktop">
        <SubcategoriesListMobile subcategories={subcategories} />
      </CSSHide>

      <CSSHide screen="mobile">
        <SubcategoriesListDesktop subcategories={subcategories} />
      </CSSHide>
    </>
  )
}
