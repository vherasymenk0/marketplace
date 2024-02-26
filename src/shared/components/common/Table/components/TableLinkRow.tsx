import { TableRow as MuiTableRow } from '@mui/material'
import { TableRowProps } from '@mui/material/TableRow/TableRow'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren &
  TableRowProps & {
    href: string
  }

export const TableLinkRow = ({ href, children, ...rest }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  return (
    <MuiTableRow onClick={handleClick} {...rest}>
      {children}
    </MuiTableRow>
  )
}
